import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsc } from "../utils/runTtsc";

/**
 * misc.literals / misc.clone / misc.prune / notations.camel / reflect.name.
 */
export async function test_emit_misc(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "misc");
  const dist = path.join(fixture, "dist");
  fs.rmSync(dist, { recursive: true, force: true });

  const result = runTtsc(
    ["--tsconfig=tsconfig.json", "--emit", "--quiet"],
    fixture,
  );
  assert.equal(result.status, 0, `stderr:\n${result.stderr}`);

  const mainPath = path.join(dist, "main.js");
  delete require.cache[require.resolve(mainPath)];
  const mod = require(mainPath) as {
    statuses: string[];
    booleans: boolean[];
    bigintLiterals: bigint[];
    schemaName: string;
    inlineName: string;
    regularInlineName: string;
    toCamel: (x: { first_name: string; last_name: string }) => {
      firstName: string;
      lastName: string;
    };
    toSnake: (x: { __userID: string; displayName: string }) => {
      __user_id: string;
      display_name: string;
    };
    pruneMember: (x: Record<string, unknown>) => Record<string, unknown>;
    cloneMember: (x: { id: string; name: string }) => {
      id: string;
      name: string;
    };
  };

  assert.deepEqual(
    [...mod.statuses].sort(),
    ["active", "archived", "pending"],
  );
  assert.equal(mod.schemaName, "Member");
  assert.deepEqual(mod.booleans, [true, false]);
  assert.deepEqual(mod.bigintLiterals, [BigInt(1), BigInt(2)]);
  assert.equal(mod.inlineName, "{ value: string }");
  assert.match(mod.regularInlineName, /^TypeLiteral#[0-9]+$/);

  assert.deepEqual(
    mod.toCamel({ first_name: "Jane", last_name: "Doe" }),
    { firstName: "Jane", lastName: "Doe" },
  );
  assert.deepEqual(
    mod.toSnake({ __userID: "u", displayName: "Jane" }),
    { __user_id: "u", display_name: "Jane" },
  );

  const pruned = mod.pruneMember({
    id: "a",
    name: "Bob",
    extra: "should be gone",
  });
  assert.deepEqual(pruned, { id: "a", name: "Bob" });

  const src = { id: "a", name: "Bob" };
  const cloned = mod.cloneMember(src);
  assert.deepEqual(cloned, src);
  assert.notStrictEqual(cloned, src, "clone should create a new reference");
}
