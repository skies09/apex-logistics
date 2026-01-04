/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],

	theme: {
		colors: {
			// Primary brand colors - Security & Trust
			colorOne: "#0066CC", // Deep blue - trust, security
			colorTwo: "#1A4D7A", // Darker blue - stability
			colorThree: "#0A1929", // Near black - professionalism
			colorFour: "#003366", // Navy blue - depth
			colorFive: "#E8F4F8", // Light blue-gray - clean backgrounds
			// Accent colors - Speed & Energy
			accentOrange: "#FF6B35", // Vibrant orange - speed, energy
			accentAmber: "#FFA500", // Amber - action
			// Supporting colors
			lightGray: "#F5F7FA", // Very light gray
			mediumGray: "#6B7280", // Medium gray for text
			white: "#FFFFFF",
			black: "#000000",
		},
		fontFamily: {
			fugaz: ["Fugaz One", "sans-serif"],
			racing: ["Racing Sans One", "sans-serif"],
			zilla: ["Zilla Slab", "serif"],
			russo: ["Russo One", "sans-serif"],
			bebas: ["Bebas Neue", "sans-serif"],
			oswald: ["Oswald", "sans-serif"],
			monoTwo: ["Roboto Mono", "monospace"],
		},
		extend: {
			transitionDuration: {
				2000: "2000ms",
			},
			boxShadow: {
				"shadow-primary":
					"0 4px 14px 0 rgba(0, 102, 204, 0.15), 0 0 0 1px rgba(0, 102, 204, 0.05)",
				"shadow-accent":
					"0 4px 14px 0 rgba(255, 107, 53, 0.25), 0 0 0 1px rgba(255, 107, 53, 0.1)",
				"shadow-elevated":
					"0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
			},
		},
	},
	plugins: [],
};
