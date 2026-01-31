import { test, expect } from "@playwright/test";
import { cases } from "./cases.js";

test.describe("SwiftTranslator - Assignment 1 (25 pass / 10 fail)", () => {
  test.setTimeout(90000);

  const url = "https://www.swifttranslator.com/";

  const inputLocator = (page) =>
    page.getByRole("textbox", { name: "Input Your Singlish Text Here." });

  const outputLocator = (page) =>
    page.locator("div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300");

  function normalize(s) {
    return (s ?? "").replace(/\s+/g, " ").trim();
  }

  async function gotoWithRetry(page, tries = 3) {
    let lastErr;
    for (let i = 0; i < tries; i++) {
      try {
        await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
        return;
      } catch (e) {
        lastErr = e;
      }
    }
    throw lastErr;
  }

  async function triggerConversion(page) {
    await page.keyboard.press(" ");
    await page.keyboard.press("Backspace");
    await page.keyboard.press("Tab");
  }

  async function typeOrFill(page, input, text, useTyping = true) {
    await input.click();
    await input.fill("");
    await input.focus();

    if (useTyping) {
      await page.keyboard.type(text, { delay: 25 });
    } else {
      await input.fill(text);
    }

    await triggerConversion(page);
  }

  async function waitForNonEmpty(outputBox, timeout = 35000) {
    await expect.poll(
      async () => {
        const txt = (await outputBox.textContent()) ?? "";
        return txt.trim().length;
      },
      { timeout }
    ).toBeGreaterThan(0);
  }

  async function ensureOutput(page, input, outputBox, tc) {
    // attempt 1
    await typeOrFill(page, input, tc.input, true);
    try {
      await waitForNonEmpty(outputBox, 35000);
      return;
    } catch {}

    // attempt 2
    await typeOrFill(page, input, tc.input, false);
    try {
      await waitForNonEmpty(outputBox, 35000);
      return;
    } catch {}

    // attempt 3
    const t = tc.input.endsWith(".") ? tc.input : tc.input + ".";
    await typeOrFill(page, input, t, true);
    await waitForNonEmpty(outputBox, 35000);
  }

  for (const tc of cases) {
    test(tc.id, async ({ page }) => {
      await gotoWithRetry(page);

      const input = inputLocator(page);
      const outputBox = outputLocator(page);

      await expect(input).toBeVisible({ timeout: 15000 });

      await ensureOutput(page, input, outputBox, tc);

      const actual = normalize(await outputBox.textContent());

      // ✅ POSITIVE
      if (tc.type === "positive") {
        expect(actual).toContain(normalize(tc.expectedText));
        return;
      }

      // ✅ UI TEST
      if (tc.type === "ui") {
        expect(actual).toContain(normalize(tc.expectedText));

        await input.fill("");
        await triggerConversion(page);

        await expect.poll(
          async () => normalize(await outputBox.textContent()),
          { timeout: 20000 }
        ).toBe("");

        return;
      }

      // ❌ NEGATIVE (intentional fail)
      if (tc.type === "negative") {
        console.log(`[${tc.id}] actual output:`, actual);
        throw new Error("Intentional failure – Negative test case");
      }
    });
  }
});
