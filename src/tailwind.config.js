module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)',
        highlight: 'rgb(var(--color-highlight) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        'accent-orange': 'rgb(var(--color-accent-orange) / <alpha-value>)',
        'accent-red': 'rgb(var(--color-accent-red) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};