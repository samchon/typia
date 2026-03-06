import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		includeSource: ['src/**/*.{js,ts}'],
		testTimeout: 150000,
		typecheck: true,
	},
});
