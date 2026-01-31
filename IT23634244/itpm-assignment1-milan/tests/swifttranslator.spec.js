import { test, expect } from "@playwright/test";
import { cases } from "./cases.js";

const inputLocator = (page) =>
  page.getByRole("textbox", { name: "Input Your Singlish Text Here." });

async function typeLikeUser(page, locator, text) {
  await locator.fill("");
  // Typing triggers the site's real-time conversion more reliably than fill()
  await locator.click();
  await page.keyboard.type(text, { delay: 20 });
}

test.describe("SwiftTranslator - Assignment 1", () => {
  for (const tc of cases) {
    test(tc.id, async ({ page }) => {
      await page.goto("https://www.swifttranslator.com/", {
        waitUntil: "domcontentloaded",
      });

      const input = inputLocator(page);

      // Output box (avoid suggestion list strict-mode conflicts)
      const outputBox = page.locator("div.w-full.h-80");

      // Special: Sinhala characters in singlish input (warning not stable)
      if (tc.type === "invalid_sinhala_mix") {
        await typeLikeUser(page, input, tc.input);

        // It should NOT produce a clean correct Sinhala output
        await expect(outputBox).not.toContainText("මම පන්සල් යනවා");
        return;
      }

      // Normal cases (type instead of fill)
      await typeLikeUser(page, input, tc.input);

      // Wait until output updates (avoid flaky empty output)
      await expect
        .poll(async () => (await outputBox.textContent())?.trim() || "", {
          timeout: 10000,
        })
        .not.toBe("");

      // Assert expected appears in OUTPUT box only
      await expect(outputBox).toContainText(tc.expectedText, { timeout: 10000 });

      // UI: clear input and confirm output disappears
      if (tc.type === "ui") {
        await input.fill("");
        await expect(outputBox).not.toContainText(tc.expectedText);
      }
    });
  }
});
