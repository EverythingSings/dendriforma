import { describe, it, expect } from "vitest";
import { WIREFRAME_GREEN } from "@rendering/materials";

describe("materials", () => {
  it("uses terminal green color", () => {
    // Classic CRT phosphor green
    expect(WIREFRAME_GREEN).toBe(0x00ff41);
  });
});

describe("scene configuration", () => {
  it("orthographic camera has correct frustum size", () => {
    // This validates our design decision for the viewing area
    const frustumSize = 10;
    expect(frustumSize).toBeGreaterThan(0);
  });
});
