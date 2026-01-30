// tests/swifttranslator.spec.js
import { test, expect } from "@playwright/test";
import { cases } from "./cases.js";

const inputLocator = (page) =>
  page.getByRole("textbox", { name: "Input Your Singlish Text Here." });

test.describe("SwiftTranslator - Assignment 1", () => {
  for (const tc of cases) {
    test(tc.id, async ({ page }) => {
      await page.goto("https://www.swifttranslator.com/");

      const input = inputLocator(page);
      await input.click();

      // Output box (avoid suggestion list strict-mode conflicts)
      const outputBox = page.locator("div.w-full.h-80");

      // Special case: Sinhala characters mixed in singlish input
      // Warning message is not stable always, so we check output should NOT become "clean correct Sinhala"
      if (tc.type === "invalid_sinhala_mix") {
        await input.fill("");
        await page.keyboard.type(tc.input, { delay: 30 });

        // Should not produce the clean correct output
        await expect(outputBox).not.toContainText("මම පන්සල් යනවා");
        return;
      }

      // Normal cases
      await input.fill(tc.input);

      // Assert expected appears in OUTPUT box only
      await expect(outputBox).toContainText(tc.expectedText);

      // UI: clear input and confirm output disappears
      if (tc.type === "ui") {
        await input.fill("");
        await expect(outputBox).not.toContainText(tc.expectedText);
      }
    });
  }
});
