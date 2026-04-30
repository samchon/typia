import UnpluginInlineTypia from "@typia/unplugin/vite";
import path from "pathe";
import type { RollupOutput } from "rollup";
import { build } from "vite";

import {
  executeGeneratedFixture,
  getFixtureID,
  getFixtureIDs,
  root,
  writeGeneratedFixture,
} from "./_utils.js";

async function transform(_id: string): Promise<RollupOutput["output"]> {
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
      UnpluginInlineTypia({
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

it.each(await getFixtureIDs())(`vite transform %s`, async (id: string) => {
  const transformed = await transform(id);
  const code = transformed[0].code;
  expect(code).not.toContain("typia.create");
  const generated = await writeGeneratedFixture("vite", id, code);
  await executeGeneratedFixture(generated);
});
