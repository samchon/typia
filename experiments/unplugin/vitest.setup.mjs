import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import { resolveOptions, transformTypia } from "@typia/unplugin/api";

export default async function setup() {
  const id = resolve("src/is.spec.ts");
  const source = await readFile(id, "utf8");
  await transformTypia(
    id,
    source,
    { warn: () => undefined },
    resolveOptions({ cache: false }),
  );
}
