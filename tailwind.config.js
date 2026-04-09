/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    extend: {
       colors: {
    primary: "#4F46E5",      // Indigo blue
    secondary: "#06B6D4",    // Cyan
    accent: "#F97316",       // Orange
    dark: "#0F172A",         // Dark navy
    light: "#F8FAFC",        // Light background

    slateBg: "#F1F5F9",      // Soft page background
    card: "#FFFFFF",         // White cards
    border: "#E2E8F0",       // Light borders

    success: "#10B981",      // Green
    warning: "#F59E0B",      // Yellow-orange
    danger: "#EF4444",       // Red

    textPrimary: "#0F172A",  // Main text
    textSecondary: "#64748B" // Secondary text
  },
      },
      borderRadius: {
        xl2: "1.5rem",
      },
    },
  
  
  plugins: [],
}