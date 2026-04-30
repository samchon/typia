import UnpluginInlineTypia from "@typia/unplugin/esbuild";
import { build } from "esbuild";

import {
  executeGeneratedFixture,
  getFixtureID,
  getFixtureIDs,
  writeGeneratedFixture,
} from "./_utils.js";

async function transform(_id: string) {
  const id = getFixtureID(_id);
  const result = await build({
    entryPoints: [id],
    bundle: false,
    write: false,
    format: "esm",
    plugins: [
      UnpluginInlineTypia({
        cache: false,
        log: false,
      }),
    ],
  });
  return result.outputFiles[0].text;
}

it.each(await getFixtureIDs())(`esbuild transform %s`, async (id: string) => {
  const transformed = await transform(id);
  expect(transformed).not.toContain("typia.create");
  const generated = await writeGeneratedFixture("esbuild", id, transformed);
  await executeGeneratedFixture(generated);
});
