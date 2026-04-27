import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsc } from "../utils/runTtsc";

/**
 * typia.http.query / parameter — HTTP string → typed object coercion.
 */
export async function test_emit_http(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "http");
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
    parseQuery: (x: URLSearchParams | Record<string, unknown>) => {
      page: number;
      size: number;
      tag: string[];
      sort?: string;
    };
    parseIntParam: (x: string) => number;
    parseBoolParam: (x: string) => boolean;
    parseBigintParam: (x: string) => bigint;
    parseLiteralParam: (x: string) => 3;
    parseFormData: (x: FormData) => {
      title: string;
      count: number;
      active: boolean;
      files: File[];
      optional?: string;
    };
    assertFormData: (x: FormData) => {
      title: string;
      count: number;
      active: boolean;
      files: File[];
      optional?: string;
    };
    isFormData: (x: FormData) => {
      title: string;
      count: number;
      active: boolean;
      files: File[];
      optional?: string;
    } | null;
  };

  // parameter coercion.
  assert.equal(mod.parseIntParam("42"), 42);
  assert.throws(() => mod.parseIntParam("null" as any), /typia\.http\.parameter/);
  assert.throws(() => mod.parseIntParam("NaN-ish"), /typia\.http\.parameter/);
  assert.equal(mod.parseBoolParam("1"), true);
  assert.equal(mod.parseBoolParam("0"), false);
  assert.throws(() => mod.parseBoolParam("null" as any), /typia\.http\.parameter/);
  assert.throws(() => mod.parseBoolParam("yes"), /typia\.http\.parameter/);
  assert.equal(mod.parseBigintParam("123"), BigInt(123));
  assert.throws(() => mod.parseBigintParam("null" as any), /typia\.http\.parameter/);
  assert.throws(() => mod.parseBigintParam("abc"), /typia\.http\.parameter/);
  assert.equal(mod.parseLiteralParam("3"), 3);
  assert.throws(() => mod.parseLiteralParam("4"), /expect to be 3/);

  // query with multi-value tag, missing sort.
  const q = mod.parseQuery(new URLSearchParams("page=2&size=10&tag=red&tag=blue"));
  assert.equal(q.page, 2);
  assert.equal(q.size, 10);
  assert.deepEqual(q.tag, ["red", "blue"]);
  assert.equal(q.sort, undefined, "missing optional stays undefined");

  // query with all optional provided.
  const q2 = mod.parseQuery(
    new URLSearchParams("page=1&size=5&tag=x&sort=desc"),
  );
  assert.equal(q2.sort, "desc");

  // raw query decoder follows legacy helpers and leaves missing required
  // values as undefined; assert/is/validate wrappers are responsible for
  // reporting the type failure.
  assert.equal(
    mod.parseQuery(new URLSearchParams("page=1")).size,
    undefined,
    "raw query decoder must not throw on missing required values",
  );

  const file = new File(["hello"], "hello.txt", { type: "text/plain" });
  const form = new FormData();
  form.set("title", "demo");
  form.set("count", "12");
  form.set("active", "true");
  form.append("files", file);

  const parsed = mod.parseFormData(form);
  assert.deepEqual(
    {
      title: parsed.title,
      count: parsed.count,
      active: parsed.active,
      files: parsed.files,
      optional: parsed.optional,
    },
    {
      title: "demo",
      count: 12,
      active: true,
      files: [file],
      optional: undefined,
    },
  );
  assert.deepEqual(mod.assertFormData(form), parsed);
  assert.deepEqual(mod.isFormData(form), parsed);

  const badForm = new FormData();
  badForm.set("title", "demo");
  badForm.set("count", "NaN-ish");
  badForm.set("active", "true");
  assert.throws(() => mod.assertFormData(badForm), /typia\.http\.assertFormData/);
  assert.equal(mod.isFormData(badForm), null);
}
