"use client";

import { useEffect } from "react";

export function ChatKitScript() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const existingScript = document.querySelector(
      'script[src*="chatkit"]'
    );

    if (existingScript) {
      if (window.customElements?.get("openai-chatkit")) {
        window.dispatchEvent(new Event("chatkit-script-loaded"));
      }
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@openai/chatkit@latest/dist/chatkit.js";
    script.async = true;

    script.onload = () => {
      console.log("✅ ChatKit script loaded successfully");
      window.dispatchEvent(new Event("chatkit-script-loaded"));
    };

    script.onerror = (e) => {
      console.error("❌ Failed to load ChatKit script:", e);
      window.dispatchEvent(
        new CustomEvent("chatkit-script-error", {
          detail: "Failed to load ChatKit from CDN. Please check your network connection.",
        })
      );
    };

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}
