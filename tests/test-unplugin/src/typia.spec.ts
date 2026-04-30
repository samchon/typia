import { resolveOptions, transformTypia } from "@typia/unplugin/api";
import path from "pathe";
import type { UnpluginBuildContext, UnpluginContext } from "unplugin";

import {
  executeGeneratedFixture,
  getFixtureID,
  getFixtureIDs,
  readFixture,
  writeGeneratedFixture,
} from "./_utils.js";

class DummyContext {
  warn(args: unknown) {
    console.warn(args);
  }
}

const ctx = new DummyContext() as UnpluginContext & UnpluginBuildContext;

async function _test(_id: string) {
  const id = getFixtureID(_id);
  const code = await readFixture(_id);
  const transformed = await transformTypia(
    id as any,
    code as any,
    ctx,
    resolveOptions({ cache: false }),
    [{ find: "@", replacement: path.resolve("./tests/fixtures") }],
  );
  return transformed;
}

it.each(await getFixtureIDs())(`typia transform %s`, async (id: string) => {
  const transformed = await _test(id);
  expect(transformed).not.toContain("typia.create");
  const generated = await writeGeneratedFixture("typia", id, transformed, "ts");
  await executeGeneratedFixture(generated);
});
