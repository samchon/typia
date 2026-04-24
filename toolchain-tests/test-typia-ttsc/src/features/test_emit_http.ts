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
  };

  // parameter coercion.
  assert.equal(mod.parseIntParam("42"), 42);

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
}
