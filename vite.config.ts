import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@core": resolve(__dirname, "src/core"),
      "@growth": resolve(__dirname, "src/growth"),
      "@geometry": resolve(__dirname, "src/geometry"),
      "@rendering": resolve(__dirname, "src/rendering"),
    },
  },
  server: {
    open: true,
  },
});
