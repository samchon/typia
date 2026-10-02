import { createRequire } from "node:module";
import path from "node:path";
import type { ITtscPlugin, ITtscPluginFactoryContext } from "ttsc";

/**
 * Describe typia's native transform to ttsc.
 *
 * Ttsc loads this file as an ES module, where `require` is unavailable, so a
 * resolver is anchored on the consuming project to find typia's own package
 * root. The returned descriptor names the plugin and the Go command under
 * `native/cmd/ttsc-typia`; the transform itself is not written in TypeScript.
 *
 * @param context Plugin factory context of ttsc
 *
 * @returns Plugin descriptor
 *
 * @evidence contracts/common.md#principled-implementation The ttsc loader runs this file as an ES module where `require` is absent, so the function builds a CommonJS resolver anchored at the consuming project and resolves typia's own `package.json`, whose directory holds the native sources; the returned descriptor names the plugin and the Go command directory under `native/cmd/ttsc-typia`.
 * @evidence contracts/common.md#clear-and-simple-design One function that returns a two-field descriptor and no transformer; the default export repeats the same function for loaders that read it.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The package root comes from the installed typia through the supported resolver and not from path substrings, so it works for npm consumers and workspaces alike; the transform itself stays in Go.
 * @evidence contracts/common.md#meaningful-documentation A comment explains the purpose, the ESM resolution reason and the descriptor.
 */
export function createTtscPlugin(
  context: ITtscPluginFactoryContext,
): ITtscPlugin {
  // ttsc loads this descriptor as ESM, where the ambient `require` is
  // unavailable; anchor a CJS resolver on the consuming project to locate
  // typia's own package root (not the project root, which has no `native/`).
  const requireFrom = createRequire(
    path.join(context.projectRoot, "package.json"),
  );
  const root: string = path.dirname(requireFrom.resolve("typia/package.json"));
  return {
    name: "typia",
    source: path.resolve(root, "native", "cmd", "ttsc-typia"),
  };
}

export default createTtscPlugin;
