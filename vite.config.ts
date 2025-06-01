import { defineConfig } from "vite";
import reactSWC from "@vitejs/plugin-react-swc";
import react from "@vitejs/plugin-react";
import path from "path";

// Use SWC if available, fallback to standard React plugin
const reactPlugin = process.env.SWC_BINARY_TARGET === "wasm32-wasi" ? react : reactSWC;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    reactPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 1600,
  },
}));
