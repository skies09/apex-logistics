/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],

	theme: {
		colors: {
			colorOne: "#C0C0C0",
			colorTwo: "#2A2A2A",
			colorThree: "#000000",
			colorFour: "#383838",
			colorFive: "#A6A6A6",
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
				"shadow-colorOne":
					"0 0 5px #00A8E8, 0 0 10px #00A8E8, 0 0 20px #00A8E8, 0 0 40px #00A8E8",
				"shadow-colorTwo":
					"0 0 5px #003459, 0 0 10px #003459, 0 0 20px #003459, 0 0 40px #003459",
			},
		},
	},
	plugins: [],
};
