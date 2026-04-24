import * as assert from "assert";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";

/**
 * The `@typia/ttsc` package also exposes a TypeScript API (`transform`,
 * `build`, `check`, `version`) for bundler adapters that prefer to stay in
 * JS rather than shell out directly. This test drives each entry-point with
 * the repo-local Go binary (via `TTSC_BINARY` env) to confirm the JS wrapper
 * round-trips correctly.
 */
export async function test_js_api(): Promise<void> {
  // Load the compiled library directly so we exercise the published surface,
  // not the `src/` TypeScript.
  const api = require(
    path.join(TestGlobal.ROOT, "..", "..", "toolchain", "ttsc", "lib", "api.js"),
  ) as {
    version(options: { binary: string }): string;
    transform(options: {
      cwd: string;
      file: string;
      tsconfig: string;
    }): string;
    transformAsync(options: {
      cwd: string;
      file: string;
      tsconfig: string;
    }): Promise<string>;
    build(options: {
      cwd: string;
      tsconfig: string;
      emit: boolean;
      quiet: boolean;
    }): {
      status: number;
      stderr: string;
    };
  };

  const binary = path.join(
    TestGlobal.ROOT,
    "..",
    "..",
    "toolchain",
    "ttsc",
    "native",
    process.platform === "win32" ? "ttsc-native.exe" : "ttsc-native",
  );
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "primitives");

  // version(): banner starts with "ttsc ".
  const ver = api.version({ binary });
  assert.ok(ver.startsWith("ttsc "), `version() banner format mismatch: ${ver}`);

  // transform(): returns rewritten JS text.
  const text = api.transform({
    cwd: fixture,
    file: path.join(fixture, "src", "main.ts"),
    tsconfig: "tsconfig.json",
  });
  assert.ok(
    text.includes(`"string" === typeof input`),
    `transform() output missing rewritten body:\n${text.slice(0, 400)}`,
  );

  // build({ emit: false }): returns result record with status 0.
  const result = api.build({
    cwd: fixture,
    tsconfig: "tsconfig.json",
    emit: false,
    quiet: true,
  });
  assert.equal(result.status, 0, `build(emit:false) exited ${result.status}:\n${result.stderr}`);

  // transformAsync(): Promise-based variant returns the same text.
  const asyncText = await api.transformAsync({
    cwd: fixture,
    file: path.join(fixture, "src", "main.ts"),
    tsconfig: "tsconfig.json",
  });
  assert.equal(asyncText, text, "transformAsync must match transform()");
}
