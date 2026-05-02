import path from "node:path";
import { fileURLToPath } from "node:url";
import type { ITtscPlugin, ITtscPluginFactoryContext } from "ttsc";

const filename: string = currentFilename();
const dirname: string = path.dirname(filename);

export default function createTtscPlugin(
  context: ITtscPluginFactoryContext,
): ITtscPlugin {
  const root: string =
    resolvePackageRoot(context.projectRoot) ?? inferPackageRoot();
  return {
    name: "typia",
    source: path.resolve(root, "native", "cmd", "ttsc-typia"),
  };
}

function resolvePackageRoot(projectRoot: string): string | null {
  try {
    return path.dirname(
      require.resolve("typia/package.json", { paths: [projectRoot] }),
    );
  } catch {
    return null;
  }
}

function inferPackageRoot(): string {
  return path.resolve(dirname, "..");
}

function currentFilename(): string {
  if (
    typeof __filename === "string" &&
    __filename !== "[stdin]" &&
    __filename.length !== 0
  ) {
    return normalizeFilename(__filename);
  }
  const line = new Error().stack
    ?.split("\n")
    .find(
      (entry) =>
        entry.includes("/src/transform.ts") ||
        entry.includes("/lib/transform.js") ||
        entry.includes("/lib/transform.mjs") ||
        entry.includes("/lib/transform2.mjs"),
    );
  const matched = line?.match(/\(([^()]+):\d+:\d+\)|at ([^\s()]+):\d+:\d+/);
  const fallback: string = typeof __filename === "string" ? __filename : "";
  return normalizeFilename(matched?.[1] ?? matched?.[2] ?? fallback);
}

function normalizeFilename(value: string): string {
  if (value.startsWith("file:")) {
    return fileURLToPath(value);
  }
  return value;
}
