/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			colors: {
				'penn_blue': { DEFAULT: '#032050', 100: '#010610', 200: '#010d1f', 300: '#02132f', 400: '#021a3f', 500: '#032050', 600: '#0641a1', 700: '#0963f4', 800: '#5a97f9', 900: '#accbfc' },
				'blue_crayon': { DEFAULT: '#2879fe', 100: '#00173b', 200: '#012d76', 300: '#0144b1', 400: '#015beb', 500: '#2879fe', 600: '#5496fe', 700: '#7fb0fe', 800: '#aacaff', 900: '#d4e5ff' },
				'selective_yellow': { DEFAULT: '#ffb503', 100: '#342400', 200: '#684900', 300: '#9c6d00', 400: '#d09200', 500: '#ffb503', 600: '#ffc337', 700: '#ffd269', 800: '#ffe19b', 900: '#fff0cd' },
				'bright_pink_crayon': { DEFAULT: '#ff5964', 100: '#440005', 200: '#890009', 300: '#cd000e', 400: '#ff1222', 500: '#ff5964', 600: '#ff7881', 700: '#ff9aa1', 800: '#ffbcc0', 900: '#ffdde0' },
				'cambridge_blue': { DEFAULT: '#89b0ae', 100: '#192525', 200: '#324b49', 300: '#4b706e', 400: '#649593', 500: '#89b0ae', 600: '#a0bfbe', 700: '#b7cfce', 800: '#cfdfde', 900: '#e7efef' }
			}
		},
	},
	plugins: [require('flowbite/plugin')({
		datatables: true,
	})],
}
