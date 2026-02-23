import { defineConfig } from 'tsdown';

const config: ReturnType<typeof defineConfig> = defineConfig({
	entry: [
		'src/*.ts',
	],
	define: {
		'import.meta.vitest': 'undefined',
	},
	clean: true,
	format: ['esm'],
	shims: true,
	target: 'es2023',
	dts: true,
	sourcemap: true,
	unused: {
		level: 'error',
	},
	publint: true,
	exports: true,
});

export default config;
