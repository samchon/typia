import * as assert from "assert";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";

/**
 * The `ttsc` package exposes `TtscCompiler` for JS hosts that prefer to stay in
 * process rather than shell out directly. This test drives the compile and
 * transform API against typia's plugin contract.
 */
export async function test_js_api(): Promise<void> {
  const api = require("ttsc") as {
    TtscCompiler: new (context: {
      binary: string;
      cwd: string;
      env?: NodeJS.ProcessEnv;
      tsconfig: string;
    }) => {
      compile(): {
        output?: Record<string, string>;
        type: "success" | "failure" | "exception";
      };
      transform(): {
        type: "success" | "failure" | "exception";
        typescript?: Record<string, string>;
      };
    };
  };

  assert.ok(TestGlobal.TTSC_BINARY, "ttsc native binary must be resolvable");
  const binary = TestGlobal.TTSC_BINARY;
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "primitives");
  const env = { TTSC_CACHE_DIR: TestGlobal.TTSC_CACHE_DIR };
  const previousCacheDir = process.env.TTSC_CACHE_DIR;
  process.env.TTSC_CACHE_DIR = TestGlobal.TTSC_CACHE_DIR;

  try {
    const compiler = new api.TtscCompiler({
      binary,
      cwd: fixture,
      env,
      tsconfig: "tsconfig.json",
    });

    // transform(): returns rewritten TypeScript text.
    const transformed = compiler.transform();
    assert.equal(transformed.type, "success");
    const text = transformed.typescript?.["src/main.ts"] ?? "";
    assert.ok(
      text.includes(`"string" === typeof input`),
      `transform() output missing rewritten body:\n${text.slice(0, 400)}`,
    );

    // compile(): returns emitted JS text without writing to the fixture.
    const compiled = compiler.compile();
    assert.equal(compiled.type, "success");
    assert.ok(
      compiled.output?.["dist/main.js"]?.includes(`"string" === typeof input`),
      "compile() output missing rewritten JavaScript",
    );
  } finally {
    if (previousCacheDir === undefined) delete process.env.TTSC_CACHE_DIR;
    else process.env.TTSC_CACHE_DIR = previousCacheDir;
  }
}
