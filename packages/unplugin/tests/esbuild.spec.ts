import { execSync } from "node:child_process";
import { build } from "esbuild";
import { describe, expect, it } from "vitest";
import UnpluginTypia from "../src/esbuild.js";
import type { ID } from "../src/core/types.js";
import { getFixtureID, getFixtureIDs, getSnapshotID } from "./_utils.js";

async function transform(_id: ID) {
  const id = getFixtureID(_id);
  const result = await build({
    entryPoints: [id],
    bundle: false,
    write: false,
    format: "esm",
    plugins: [
      UnpluginTypia({
        cache: false,
        log: false,
      }),
    ],
  });
  return result.outputFiles[0].text;
}

describe("esbuild transform", () => {
  it.each(await getFixtureIDs())(`esbuild transform %s`, async (id: ID) => {
    const transformed = await transform(id);
    const snapshot = getSnapshotID(id).replace(
      "__snapshots__",
      "__snapshots__/esbuild",
    );
    await expect(transformed).toMatchFileSnapshot(snapshot);
    execSync(`node ${snapshot}`, { encoding: "utf-8" });
  });
});
