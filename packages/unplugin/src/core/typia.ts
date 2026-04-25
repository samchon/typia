import { transform as ttscTransform } from "ttsc";
import { existsSync } from "node:fs";
import { dirname, isAbsolute, join, resolve } from "pathe";
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
  const tsconfig = resolveTsconfig(id, options.tsconfig);
  const result = ttscTransform({
    file: id,
    cwd: dirname(tsconfig),
    tsconfig,
    plugins: [
      {
        transform: "typia/lib/transform",
      },
    ],
  });
  return wrap<Data>(result);
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
