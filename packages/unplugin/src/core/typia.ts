import type { Alias } from 'vite';
import ts from 'typescript';
import { dirname, resolve } from 'pathe';
import { resolveTSConfig } from 'pkg-types';
import { transform as typiaTransform } from 'typia/lib/transform.js';

import { consola } from 'consola';
import type { ResolvedOptions } from './options.js';
import type { Data, ID, Source, UnContext } from './types.js';
import { wrap } from './types.js';

/** create a printer */
const printer = ts.createPrinter();

/** cache compilerOptions */
let compilerOptions: ts.CompilerOptions | undefined;

/** cache source files */
const sourceCache = new Map<string, ts.SourceFile>();

/**
 * Transform a TypeScript file with Typia.
 *
 * @param _id - The file path.
 * @param _source - The source code.
 * @param unpluginContext - The unplugin context.
 * @param options - The resolved options.
 * @param aliases - Path aliases to be resolved
 * @returns The transformed code.
 */
export async function transformTypia(
	_id: ID,
	_source: Source,
	/**
	 * **Use with caution.**
	 *
	 */
	unpluginContext: UnContext,
	options: ResolvedOptions,
	aliases?: Alias[],
): Promise<Data> {
	const id = wrap<ID>(resolve(_id));
	const source = wrap<Source>(_source);

	/** Whether to enable cache */
	const cacheEnable = options.cache;

	/** parse tsconfig compilerOptions */
	compilerOptions = await getTsCompilerOption(cacheEnable, options?.tsconfig);

	const { program, tsSource } = await getProgramAndSource(id, source, compilerOptions, aliases, cacheEnable);

	using result = transform(id, program, tsSource, options.typia);
	const { diagnostics, transformed, file } = result;

	warnDiagnostic(diagnostics, transformed, unpluginContext);

	const data = printer.printFile(file);
	return wrap<Data>(data);
}

/**
 * Read tsconfig.json and get compilerOptions.
 * @param cacheEnable - Whether to enable cache. @default true
 * @param tsconfigId - The tsconfig.json path. @default undefined
 */
async function getTsCompilerOption(cacheEnable = true, tsconfigId?: string): Promise<ts.CompilerOptions> {
	const parseTsCompilerOptions = async () => {
		const readFile = (path: string) => ts.sys.readFile(path);
		const id = (tsconfigId != null) ? resolve(tsconfigId) : await resolveTSConfig();

		const tsconfigParseResult = ts.readConfigFile(id, readFile);
		if (tsconfigParseResult.error != null) {
			throw new Error(tsconfigParseResult.error.messageText.toString());
		}

		const tsconfig = ts.parseJsonConfigFileContent(tsconfigParseResult.config, ts.sys, dirname(id));

		return tsconfig.options;
	};

	/** parse tsconfig compilerOptions */
	if (cacheEnable) {
		compilerOptions ??= await parseTsCompilerOptions();
	}
	else {
		compilerOptions = await parseTsCompilerOptions();
	}

	return compilerOptions;
}

/**
 * Get program and source.
 *
 * @param id - The file path.
 * @param source - The source code.
 * @param compilerOptions - The compiler options.
 * @param aliases - Alias list
 * @param cacheEnable - Whether to enable cache. @default true
 * @returns The program and source.
 */
async function getProgramAndSource(
	id: ID,
	source: Source,
	compilerOptions: ts.CompilerOptions,
	aliases?: Alias[],
	cacheEnable = true,
): Promise<{ program: ts.Program; tsSource: ts.SourceFile }> {
	const tsSource = ts.createSourceFile(
		id,
		source,
		compilerOptions.target ?? ts.ScriptTarget.ES2020,
	);
	const host = ts.createCompilerHost(compilerOptions);

	/** when alias defined in config, resolve module with alias */
	if (aliases != null && aliases.length > 0) {
		/** resolve module with alias */
		host.resolveModuleNameLiterals = (moduleLiterals, containingFile, _, options) => {
			return moduleLiterals.map((lit) => {
				/* resolve module witoout alias */
				const module = ts.resolveModuleName(
					lit.text,
					containingFile,
					options,
					host,
					host.getModuleResolutionCache?.(),
				);

				/* if module is resolved, return it */
				if (module.resolvedModule != null) {
					return module;
				}

				/* find matching alias */
				const alias = findMatchingAlias(lit.text, aliases);

				/* if no matching alias, return module */
				if (alias == null) {
					return module;
				}

				/* when alais is found and there is unresolved module, resolve it */
				return ts.resolveModuleName(
					resolve(lit.text.replace(alias.find, alias.replacement)),
					containingFile,
					options,
					host,
					host.getModuleResolutionCache?.(),
				);
			});
		};
	}

	host.getSourceFile = (fileName, languageVersion) => {
		if (fileName === id) {
			return tsSource;
		}

		if (cacheEnable) {
			const cache = sourceCache.get(fileName);
			if (cache != null) {
				return cache;
			}
		}

		const source = ts.sys.readFile(fileName);
		if (source == null) {
			return undefined;
		}
		const result = ts.createSourceFile(fileName, source, languageVersion);

		if (cacheEnable) {
			sourceCache.set(fileName, result);
		}

		return result;
	};
	const program = ts.createProgram([id], compilerOptions, host);

	return { program, tsSource };
}

/**
 * Transform a TypeScript file with Typia.
 *
 * @param id - The file path.
 * @param program - The program.
 * @param tsSource - The source file.
 * @param typiaOptions - The Typia options.
 * @returns The transformed code and source map.
 */
function transform(
	id: ID,
	program: ts.Program,
	tsSource: ts.SourceFile,
	typiaOptions?: ResolvedOptions['typia'],
): {
		/** The diagnostics */
		diagnostics: ts.Diagnostic[];
		/** The transformed source files */
		transformed: ts.SourceFile[];
		/** The transformed source file we need */
		file: ts.SourceFile;
		/** Dispose the transformation */
		[Symbol.dispose]: () => void;
	} {
	const diagnostics: ts.Diagnostic[] = [];

	/** transform with Typia */
	const typiaTransformer = typiaTransform(program, typiaOptions, {
		addDiagnostic(diag) {
			return diagnostics.push(diag);
		},
	});

	/** transform with TypeScript */
	const transformationResult = ts.transform(
		tsSource,
		[typiaTransformer],
		{
			...program.getCompilerOptions(),
			sourceMap: true,
			inlineSources: true,
		},
	);

	const file = transformationResult.transformed.find(t => resolve(t.fileName) === id);

	if (file == null) {
		throw new Error('No file found');
	}

	const { transformed } = transformationResult;

	return {
		diagnostics,
		transformed,
		file,
		[Symbol.dispose]: () => transformationResult.dispose(),
	};
}

/** Warn diagnostics */
function warnDiagnostic(
	diagnostics: ts.Diagnostic[],
	transformed: ts.SourceFile[],
	unpluginContext: UnContext,
) {
	for (const diagnostic of diagnostics) {
		const warn = ((message) => {
			if (unpluginContext?.warn != null) {
				return unpluginContext.warn(message);
			}
			return consola.warn(message);
		}) satisfies typeof unpluginContext.warn;

		warn(transformed.map(e => e.fileName).join(','));
		warn(JSON.stringify(diagnostic.messageText));
	}
}

/** Find matching alias */
function findMatchingAlias(text: string, aliases: Alias[]) {
	if (aliases.length > 0) {
		return aliases.find((alias) => {
			if (typeof alias.find === 'string') {
				return text.startsWith(alias.find);
			}
			return alias.find.test(text);
		});
	}
}
