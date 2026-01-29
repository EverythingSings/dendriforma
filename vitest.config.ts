import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["tests/unit/**/*.test.ts"],
  },
  resolve: {
    alias: {
      "@core": resolve(__dirname, "src/core"),
      "@growth": resolve(__dirname, "src/growth"),
      "@geometry": resolve(__dirname, "src/geometry"),
      "@rendering": resolve(__dirname, "src/rendering"),
    },
  },
});
