// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,

    // ✅ Fix for CodeSandbox / hosted preview domains
    // Allow this specific host + common patterns
    allowedHosts: ["hgr4kp-5173.csb.app", ".csb.app"],

    // Helpful in sandboxes / reverse proxies
    host: true,
    cors: true,
  },
  preview: {
    port: 5173,
    strictPort: true,
    allowedHosts: ["hgr4kp-5173.csb.app", ".csb.app"],
  },
});
