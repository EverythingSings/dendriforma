import { test, expect } from "@playwright/test";

test("renders green wireframe cube", async ({ page }) => {
  await page.goto("/");

  // Wait for canvas to be present and WebGL to initialize
  const canvas = page.locator("canvas");
  await expect(canvas).toBeVisible();

  // Give the animation a moment to start
  await page.waitForTimeout(500);

  // Screenshot for visual regression
  await expect(page).toHaveScreenshot("wireframe-cube.png", {
    maxDiffPixels: 100, // Allow small differences due to timing
  });
});

test("canvas fills viewport", async ({ page }) => {
  await page.goto("/");

  const canvas = page.locator("canvas");
  const viewport = page.viewportSize();

  if (viewport) {
    const box = await canvas.boundingBox();
    expect(box?.width).toBe(viewport.width);
    expect(box?.height).toBe(viewport.height);
  }
});
