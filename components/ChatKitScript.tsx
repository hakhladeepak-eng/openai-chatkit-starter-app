"use client";

import { useEffect } from "react";

export function ChatKitScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.openai.com/chatkit/v1/chatkit.js";
    script.async = true;
    script.onload = () => console.log("✅ ChatKit loaded successfully");
    script.onerror = (e) => console.error("❌ Failed to load ChatKit script:", e);
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return null;
}
