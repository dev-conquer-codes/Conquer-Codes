import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#a78bfa", // Main primary color
          light: "#ff8a50",  // Light variant of primary
          dark: "#d84315",   // Dark variant of primary
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
