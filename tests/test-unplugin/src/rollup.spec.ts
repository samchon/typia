import UnpluginInlineTypia from "@typia/unplugin/rollup";
import { RollupEsbuildPlugin, rollupBuild } from "@vue-macros/test-utils";

import {
  executeGeneratedFixture,
  getFixtureID,
  getFixtureIDs,
  writeGeneratedFixture,
} from "./_utils.js";

async function transform(_id: string) {
  const id = getFixtureID(_id);
  const result = await rollupBuild(id, [
    UnpluginInlineTypia({
      cache: false,
      log: false,
    }),
    RollupEsbuildPlugin(),
    {
      name: "test:mod-options",
      options(options) {
        options.treeshake = "smallest";
      },
    },
  ]);
  return result;
}

it.each(await getFixtureIDs())(`rollup transform %s`, async (id: string) => {
  const transformed = await transform(id);
  expect(transformed).not.toContain("typia.create");
  const generated = await writeGeneratedFixture("rollup", id, transformed);
  await executeGeneratedFixture(generated);
});
