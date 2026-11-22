import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        subtle: "var(--subtle)",
        border: "var(--border)",
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          soft: "var(--accent-soft)",
          border: "var(--accent-border)",
        },
        cyber: {
          bg: "#050308",
          surface: "#0E091E",
          card: "#120B24",
          cardHover: "#181033",
          border: "#2A184D",
          borderGlow: "#A855F7",
          purple: "#A855F7",
          purpleNeon: "#C084FC",
          purpleDeep: "#6B21A8",
          magenta: "#D946EF",
          neonGreen: "#00FF66",
          emerald: "#10B981",
          cyan: "#38BDF8",
          text: "#F8FAFC",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px -1px rgba(0, 0, 0, 0.02)",
        card: "0 2px 10px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.02)",
        "card-hover": "0 12px 30px rgba(0, 0, 0, 0.06), 0 4px 10px rgba(0, 0, 0, 0.03)",
        button: "0 2px 8px rgba(49, 94, 251, 0.25)",
        cyber: "0 0 20px rgba(168, 85, 247, 0.25)",
        "cyber-glow": "0 0 35px rgba(168, 85, 247, 0.45)",
        "neon-green": "0 0 25px rgba(0, 255, 102, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
