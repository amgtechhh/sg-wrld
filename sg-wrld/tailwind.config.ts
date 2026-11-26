import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 60% Dominant Architectural Paper / Chalk Surface
        paper: {
          DEFAULT: "#d7ddd2",
          light: "#e3e8df",
          dark: "#c6cec0",
        },
        // 30% Secondary Deep Burgundy / Plan & Ink
        plan: {
          DEFAULT: "#4b1827",
          deep: "#2f0d17",
          muted: "#6b3243",
        },
        // 10% High-Visibility Orange Accent
        hivis: {
          DEFAULT: "#ff6b1a",
          light: "#ff8542",
          dark: "#e05509",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
