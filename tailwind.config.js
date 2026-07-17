import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101727",
        muted: "#627382",
        brand: "#4f39f6",
        violet: "#9514fa",
        surface: "#f7f8fc"
      },
      fontFamily: {
        sans: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(16, 23, 39, 0.08)",
        card: "0 8px 30px rgba(16, 23, 39, 0.07)",
        purple: "0 15px 35px rgba(79, 57, 246, 0.28)"
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(105deg, #4f39f6 0%, #9514fa 100%)"
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        digitools: {
          primary: "#4f39f6",
          secondary: "#9514fa",
          accent: "#f97316",
          neutral: "#101727",
          "base-100": "#ffffff",
          "base-200": "#f7f8fc",
          "base-300": "#e8eaf2",
          info: "#3b82f6",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#ef4444"
        }
      }
    ],
    darkTheme: false
  }
};
