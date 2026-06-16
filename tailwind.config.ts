import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1a1c24",
        mid: "#4a4f63",
        muted: "#8a90a6",
        rule: "#dde0ea",
        accent: "#1e4fa8",
        accent2: "#0d8a6b",
        canvas: "#f8f9fc",
        tagbg: "#eef1f9",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
