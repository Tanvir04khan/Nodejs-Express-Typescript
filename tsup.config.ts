import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["src/index.ts"], // Entry point for the application
  outDir: "dist", // Output directory for compiled JavaScript
  format: ["cjs"], // CommonJS format for Node.js
  sourcemap: true, // Enable source maps for debugging
  clean: true, // Clean the output directory before each build
});
