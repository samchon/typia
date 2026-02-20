import { execSync } from "node:child_process";
import { build } from "vite";
import type { RollupOutput } from "rollup";
import path from "pathe";
import { describe, expect, it } from "vitest";
import UnpluginTypia from "../src/vite.js";
import type { ID } from "../src/core/types.js";
import { getFixtureID, getFixtureIDs, getSnapshotID, root } from "./_utils.js";

async function transform(_id: ID): Promise<RollupOutput["output"]> {
  const id = getFixtureID(_id);
  const { output } = (await build({
    root,
    build: {
      minify: false,
      rollupOptions: {
        input: [id],
        external: ["typia"],
      },
      write: false,
    },
    logLevel: "silent",
    plugins: [
      UnpluginTypia({
        cache: false,
        log: false,
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve("./tests/fixtures"),
      },
    },
  })) as RollupOutput;
  return output;
}

describe("vite transform", () => {
  it.each(await getFixtureIDs())(`vite transform %s`, async (id: ID) => {
    const transformed = await transform(id);
    const code = transformed[0].code;
    const snapshot = getSnapshotID(id).replace(
      "__snapshots__",
      "__snapshots__/vite",
    );
    await expect(code).toMatchFileSnapshot(snapshot);
    execSync(`node ${snapshot}`, { encoding: "utf-8" });
  });
});
