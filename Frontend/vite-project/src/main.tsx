import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("[FINSTOCK] Booting app...");
window.addEventListener("error", (e) => {
  console.error("[FINSTOCK] Global error:", (e as ErrorEvent).error || e.message);
});
window.addEventListener("unhandledrejection", (e: PromiseRejectionEvent) => {
  console.error("[FINSTOCK] Unhandled rejection:", e.reason);
});

const rootEl = document.getElementById("root");
if (!rootEl) {
  console.error("[FINSTOCK] Root element #root not found.");
} else {
  createRoot(rootEl).render(<App />);
}

