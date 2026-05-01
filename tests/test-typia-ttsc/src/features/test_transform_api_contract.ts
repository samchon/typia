import * as assert from "assert";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";

/**
 * `TtscCompiler.transform()` is the plugin-author hook: given a project and
 * its tsconfig, it returns rewritten TypeScript text by project-relative path.
 */
export async function test_transform_api_contract(): Promise<void> {
  const api = require("ttsc") as {
    TtscCompiler: new (context: {
      binary: string;
      cwd: string;
      env?: NodeJS.ProcessEnv;
      tsconfig: string;
    }) => {
      transform(): {
        diagnostics?: unknown;
        error?: unknown;
        type: "success" | "failure" | "exception";
        typescript?: Record<string, string>;
      };
    };
  };

  assert.ok(TestGlobal.TTSC_BINARY, "ttsc native binary must be resolvable");
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "primitives");
  const result = new api.TtscCompiler({
    binary: TestGlobal.TTSC_BINARY,
    cwd: fixture,
    env: { TTSC_CACHE_DIR: TestGlobal.TTSC_CACHE_DIR },
    tsconfig: "tsconfig.json",
  }).transform();

  assert.equal(
    result.type,
    "success",
    `TtscCompiler.transform() should succeed:\n${formatFailure(result)}`,
  );
  const text = result.typescript?.["src/main.ts"] ?? "";
  assert.ok(
    text.includes(`"string" === typeof input`),
    `expected rewritten is<string> body in transform output:\n${text.slice(0, 500)}`,
  );
  assert.ok(
    !text.includes("typia.is<"),
    `rewriter should have replaced typia.is call; output head:\n${text.slice(0, 500)}`,
  );
}

function formatFailure(result: {
  diagnostics?: unknown;
  error?: unknown;
  type: string;
}): string {
  if (result.type === "failure") {
    return JSON.stringify(result.diagnostics ?? [], null, 2);
  }
  if (result.type === "exception") {
    return result.error instanceof Error
      ? result.error.message
      : String(result.error);
  }
  return "";
}
