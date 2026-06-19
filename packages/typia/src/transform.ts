import { createRequire } from "node:module";
import path from "node:path";
import type { ITtscPlugin, ITtscPluginFactoryContext } from "ttsc";

export default function createTtscPlugin(
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
