import { dirname, resolve } from "pathe";
import { transform as ttscTransform } from "@typia/ttsc";
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
  const result = ttscTransform({
    file: id,
    cwd: options.tsconfig ? process.cwd() : dirname(id),
    tsconfig: options.tsconfig,
    plugins: [
      {
        transform: "typia/lib/ttsc/plugin",
      },
    ],
    rewriteMode: "typia",
  });
  return wrap<Data>(result);
}
