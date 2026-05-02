import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsc } from "../utils/runTtsc";

/**
 * Kitchen-sink integration: a single Article type drives is / assert / validate
 * / createValidate (with Standard Schema) / json.stringify / json.schema /
 * misc.literals / misc.prune simultaneously. Any regression across analyzer /
 * emitter / rewriter trips this test.
 */
export async function test_emit_combined(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "combined");
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
    isArticle: (x: unknown) => boolean;
    assertArticle: (x: unknown) => unknown;
    validateArticle: (x: unknown) => {
      success: boolean;
      data: unknown;
      errors: unknown[];
    };
    validator: {
      (x: unknown): { success: boolean; data: unknown; errors: unknown[] };
      ["~standard"]: {
        version: number;
        vendor: string;
        validate: (
          x: unknown,
        ) =>
          | { value: unknown }
          | { issues: Array<{ message: string; path: unknown[] }> };
      };
    };
    stringify: (x: unknown) => string;
    schema: { version: string; schema: Record<string, unknown> };
    statuses: string[];
    prune: (x: Record<string, unknown>) => Record<string, unknown>;
  };

  const good = {
    id: "550e8400-e29b-41d4-a716-446655440000",
    title: "Hello",
    status: "active",
    tags: [
      { key: "ts", weight: 10 },
      { key: "go", weight: 5 },
    ],
    createdAt: new Date(),
    score: 42,
    authorEmail: "user@example.com",
  };

  // is / assert / validate happy path.
  assert.equal(mod.isArticle(good), true);
  assert.deepEqual(mod.assertArticle(good), good);
  const vOK = mod.validateArticle(good);
  assert.equal(vOK.success, true);

  // is / assert / validate failure: bad uuid.
  const bad = { ...good, id: "not-a-uuid" };
  assert.equal(mod.isArticle(bad), false, "bad uuid should fail");
  assert.throws(() => mod.assertArticle(bad));
  assert.equal(mod.validateArticle(bad).success, false);

  // Standard Schema integration.
  assert.equal(typeof mod.validator, "function");
  assert.ok(mod.validator["~standard"], "~standard must exist");
  assert.equal(mod.validator["~standard"].version, 1);
  assert.equal(mod.validator["~standard"].vendor, "typia");
  const ss = mod.validator["~standard"].validate(good);
  assert.ok("value" in ss, "Standard Schema success returns { value }");
  const ssFail = mod.validator["~standard"].validate(bad);
  assert.ok("issues" in ssFail, "Standard Schema failure returns { issues }");

  // json.stringify — roundtrip.
  const json = mod.stringify(good);
  const parsed = JSON.parse(json);
  assert.equal(parsed.id, good.id);
  assert.equal(parsed.title, good.title);

  // json.schema — proper structure.
  assert.equal(mod.schema.version, "3.1");
  const s = mod.schema.schema as any;
  assert.equal(s.type, "object");
  assert.ok(s.properties.id.format === "uuid");
  assert.ok(s.properties.authorEmail.format === "email");
  assert.equal(s.properties.score.type, "integer");

  // misc.literals.
  assert.deepEqual([...mod.statuses].sort(), ["active", "archived", "pending"]);

  // misc.prune.
  const junky = {
    id: "a",
    title: "b",
    status: "active",
    tags: [],
    createdAt: new Date(),
    score: 1,
    authorEmail: "a@b.c",
    extraField: "should be removed",
    alsoJunk: 42,
  };
  const pruned = mod.prune(junky);
  assert.ok(!("extraField" in pruned));
  assert.ok(!("alsoJunk" in pruned));
  assert.equal(pruned.id, "a");
}
