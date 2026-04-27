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

  // missing required throws.
  assert.throws(
    () => mod.parseQuery(new URLSearchParams("page=1")),
    /missing size/,
    "missing required param must throw",
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
