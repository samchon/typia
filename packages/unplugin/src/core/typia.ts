import { existsSync, rmSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, isAbsolute, join, relative, resolve } from "pathe";
import {
  type ITtscCompilerDiagnostic,
  type ITtscCompilerTransformation,
  TtscCompiler,
} from "ttsc";
import type { Alias } from "vite";

import type { ResolvedOptions } from "./options.js";
import type { Data, ID, Source, UnContext } from "./types.js";
import { wrap } from "./types.js";

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
  /** **Use with caution.** */
  _unpluginContext: UnContext,
  options: ResolvedOptions,
  _aliases?: Alias[],
): Promise<Data> {
  const id = wrap<ID>(resolve(_id));
  if (isDeclarationFile(id)) {
    return wrap<Data>(cleanupDeclarationText(_source));
  }
  const tsconfig = resolveTsconfig(id, options.tsconfig);
  const configured = createTransformTsconfig(tsconfig, _aliases);
  try {
    const result = new TtscCompiler({
      binary: resolveTsgoBinary(),
      cwd: dirname(tsconfig),
      env: {
        ...process.env,
        TYPIA_TTSC_TRANSFORM_OUTPUT: "ts",
      },
      tsconfig: configured.path,
      plugins: [
        {
          transform: "typia/lib/transform",
        },
      ],
    }).transform();
    return wrap<Data>(
      selectTransformedSource({
        file: id,
        projectRoot: dirname(configured.path),
        result,
      }),
    );
  } finally {
    configured.dispose();
  }
}

function isDeclarationFile(id: string): boolean {
  return id.endsWith(".d.ts") || id.endsWith(".d.mts") || id.endsWith(".d.cts");
}

function cleanupDeclarationText(source: string): string {
  let output = source.replaceAll("\t", "    ");
  output = output.replace(/(^import[^\n]+;\n)\n+/m, "$1");
  if (!output.endsWith("\n")) {
    output += "\n";
  }
  return output;
}

function createTransformTsconfig(
  tsconfig: string,
  aliases?: Alias[],
): { path: string; dispose: () => void } {
  const baseUrl = dirname(tsconfig);
  const path = join(
    baseUrl,
    `.typia-unplugin-${process.pid}-${Date.now()}-${Math.random()
      .toString(36)
      .slice(2)}.json`,
  );
  writeFileSync(
    path,
    JSON.stringify(
      {
        extends: tsconfig,
        compilerOptions: {
          baseUrl,
          paths: createAliasPaths(baseUrl, aliases),
        },
      },
      null,
      2,
    ),
  );
  return {
    path,
    dispose: () => rmSync(path, { force: true }),
  };
}

function createAliasPaths(
  baseUrl: string,
  aliases?: Alias[],
): Record<string, string[]> {
  const paths: Record<string, string[]> = {};
  for (const alias of aliases ?? []) {
    if (
      typeof alias.find !== "string" ||
      typeof alias.replacement !== "string"
    ) {
      continue;
    }
    const find = alias.find.replace(/\/+$/, "");
    const replacement = relative(baseUrl, alias.replacement).replace(
      /\/+$/,
      "",
    );
    paths[find] = [replacement];
    paths[`${find}/*`] = [`${replacement}/*`];
  }
  return paths;
}

function selectTransformedSource(props: {
  file: string;
  projectRoot: string;
  result: ITtscCompilerTransformation;
}): string {
  if (props.result.type === "exception") {
    throw new Error(formatUnknownError(props.result.error));
  }
  if (props.result.type === "failure") {
    throw new Error(formatDiagnostics(props.result.diagnostics));
  }

  const key = toProjectKey(props.projectRoot, props.file);
  const direct = props.result.typescript[key];
  if (direct !== undefined) {
    return direct;
  }
  for (const [candidate, source] of Object.entries(props.result.typescript)) {
    if (resolve(props.projectRoot, candidate) === props.file) {
      return source;
    }
  }
  throw new Error(`ttsc transform did not return output for ${props.file}`);
}

function toProjectKey(root: string, file: string): string {
  return relative(root, file).replace(/\\/g, "/");
}

function formatDiagnostics(diagnostics: ITtscCompilerDiagnostic[]): string {
  return diagnostics.length === 0
    ? "ttsc transform failed"
    : diagnostics
        .map((diag) =>
          [
            diag.file ?? "ttsc",
            diag.line === undefined
              ? undefined
              : `${diag.line}:${diag.character ?? 1}`,
            diag.messageText,
          ]
            .filter((part) => part !== undefined && part !== "")
            .join(": "),
        )
        .join("\n");
}

function formatUnknownError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    return error.message;
  }
  return String(error);
}

function resolveTsgoBinary(): string | undefined {
  try {
    const require = createRequire(import.meta.url);
    const packageJson =
      require.resolve("@typescript/native-preview/package.json");
    const platform = `@typescript/native-preview-${process.platform}-${process.arch}`;
    const platformJson = createRequire(packageJson).resolve(
      `${platform}/package.json`,
    );
    return join(
      dirname(platformJson),
      "lib",
      process.platform === "win32" ? "tsgo.exe" : "tsgo",
    );
  } catch {
    return undefined;
  }
}

function resolveTsconfig(file: string, tsconfig?: string): string {
  if (tsconfig) {
    return isAbsolute(tsconfig) ? tsconfig : resolve(process.cwd(), tsconfig);
  }

  let current = dirname(file);
  while (true) {
    for (const name of ["tsconfig.json", "jsconfig.json"]) {
      const candidate = join(current, name);
      if (existsSync(candidate)) {
        return candidate;
      }
    }
    const parent = dirname(current);
    if (parent === current) {
      break;
    }
    current = parent;
  }
  return resolve(process.cwd(), "tsconfig.json");
}
