import { execSync } from "node:child_process";
import { rollup } from "rollup";
import esbuild from "rollup-plugin-esbuild";
import { describe, expect, it } from "vitest";
import UnpluginTypia from "../src/rollup.js";
import type { ID } from "../src/core/types.js";
import { getFixtureID, getFixtureIDs, getSnapshotID } from "./_utils.js";

async function transform(_id: ID) {
  const id = getFixtureID(_id);
  const bundle = await rollup({
    input: id,
    plugins: [
      UnpluginTypia({
        cache: false,
        log: false,
      }),
      esbuild(),
    ],
    treeshake: "smallest",
    external: ["typia"],
  });
  const { output } = await bundle.generate({ format: "esm" });
  return output[0].code;
}

describe("rollup transform", () => {
  it.each(await getFixtureIDs())(`rollup transform %s`, async (id: ID) => {
    const transformed = await transform(id);
    const snapshot = getSnapshotID(id).replace(
      "__snapshots__",
      "__snapshots__/rollup",
    );
    await expect(transformed).toMatchFileSnapshot(snapshot);
    execSync(`node ${snapshot}`, { encoding: "utf-8" });
  });
});
