import assert from "node:assert/strict";
import test from "node:test";

import { runTypiaBuildPipeline } from "./createTypiaWorkerCompiler.ts";

const buildSuccess = {
  code: 0,
  stdout: "",
  stderr: "",
  result: JSON.stringify({
    diagnostics: [],
    output: { "src/playground.js": "export const compiled = true;" },
  }),
};

const transformPayload = (overrides = {}) => ({
  code: 0,
  stdout: JSON.stringify({
    typescript: {
      "src/playground.ts": "export const transformed = true;",
    },
  }),
  stderr: "",
  result: "",
  ...overrides,
});

const run = async (plugin, overrides = {}) => {
  const writes = new Map();
  let buildCalls = 0;
  const result = await runTypiaBuildPipeline({
    api: {
      plugin: async () => {
        if (plugin instanceof Error) throw plugin;
        return plugin;
      },
      build: async () => {
        buildCalls += 1;
        return buildSuccess;
      },
    },
    host: {
      writeFile: (path, text) => writes.set(path, text),
    },
    source: "export const input = true;",
    runTypia: true,
    workDir: "/work",
    tsconfigPath: "tsconfig.json",
    entryFile: overrides.entryFile ?? "src/playground.ts",
    typiaPluginName: "typia",
  });
  return { buildCalls, result, writes };
};

/**
 * Verifies the worker stops on every invalid typia transform response.
 *
 * The typia plugin owns transform diagnostics that the following ordinary
 * TypeScript build cannot reconstruct. The worker must validate the complete
 * response before writing any transformed file or starting that build.
 *
 * 1. Exercise nonzero, diagnostic, stderr, empty, malformed, and thrown failures.
 * 2. Assert each failure skips the ordinary build and partial file writes.
 * 3. Verify valid multi-file output and warnings still reach the build.
 */
test("typia transform responses gate the ordinary build", async (t) => {
  await t.test("nonzero status", async () => {
    const actual = await run(transformPayload({ code: 3 }));
    assert.equal(actual.result.type, "error");
    assert.match(actual.result.value.message, /code 3/);
    assert.equal(actual.buildCalls, 0);
    assert.equal(actual.writes.size, 0);
  });

  await t.test("structured transform diagnostic", async () => {
    const actual = await run(
      transformPayload({
        code: 3,
        stderr:
          "src/playground.ts:2:5 - error TS(typia.is): unsupported type\n",
        stdout: JSON.stringify({
          diagnostics: [
            {
              file: "/work/src/playground.ts",
              category: "error",
              code: "typia.is",
              line: 2,
              character: 5,
              messageText: "unsupported type",
            },
          ],
          typescript: {
            "src/playground.ts": "export const partiallyTransformed = true;",
          },
        }),
      }),
    );
    assert.deepEqual(actual.result, {
      type: "failure",
      target: "javascript",
      value: "",
      diagnostics: [
        {
          line: 2,
          column: 5,
          length: 1,
          severity: "error",
          message: "unsupported type",
          code: "typia.is",
        },
      ],
    });
    assert.equal(actual.buildCalls, 0);
    assert.equal(actual.writes.size, 0);
  });

  await t.test("stderr-only failure", async () => {
    const actual = await run(
      transformPayload({ stderr: "typia transform: transport failed\n" }),
    );
    assert.equal(actual.result.type, "error");
    assert.match(actual.result.value.message, /transport failed/);
    assert.equal(actual.buildCalls, 0);
    assert.equal(actual.writes.size, 0);
  });

  await t.test("empty stdout", async () => {
    const actual = await run(transformPayload({ stdout: "" }));
    assert.equal(actual.result.type, "error");
    assert.match(actual.result.value.message, /empty stdout/);
    assert.equal(actual.buildCalls, 0);
  });

  await t.test("malformed JSON", async () => {
    const actual = await run(transformPayload({ stdout: "{" }));
    assert.equal(actual.result.type, "error");
    assert.match(actual.result.value.message, /valid JSON/);
    assert.equal(actual.buildCalls, 0);
  });

  await t.test("malformed required payload", async () => {
    const actual = await run(
      transformPayload({
        stdout: JSON.stringify({
          typescript: { "../outside.ts": "export const escaped = true;" },
        }),
      }),
    );
    assert.equal(actual.result.type, "error");
    assert.match(actual.result.value.message, /relative TypeScript paths/);
    assert.equal(actual.buildCalls, 0);
    assert.equal(actual.writes.size, 0);
  });

  await t.test("missing entry output", async () => {
    const actual = await run(
      transformPayload({
        stdout: JSON.stringify({
          typescript: { "src/helper.ts": "export const helper = true;" },
        }),
      }),
    );
    assert.equal(actual.result.type, "error");
    assert.match(actual.result.value.message, /entry file/);
    assert.equal(actual.buildCalls, 0);
    assert.equal(actual.writes.size, 0);
  });

  await t.test("relative entry alias", async () => {
    const actual = await run(transformPayload(), {
      entryFile: "./src/playground.ts",
    });
    assert.deepEqual(actual.result, {
      type: "success",
      target: "javascript",
      value: "export const compiled = true;",
    });
    assert.equal(actual.buildCalls, 1);
    assert.deepEqual(
      [...actual.writes],
      [["/work/src/playground.ts", "export const transformed = true;"]],
    );
  });

  await t.test("canonical duplicate paths", async () => {
    const actual = await run(
      transformPayload({
        stdout: JSON.stringify({
          typescript: {
            "src/playground.ts": "export const first = true;",
            "src/./playground.ts": "export const second = true;",
          },
        }),
      }),
    );
    assert.equal(actual.result.type, "error");
    assert.match(actual.result.value.message, /duplicate TypeScript paths/);
    assert.equal(actual.buildCalls, 0);
    assert.equal(actual.writes.size, 0);
  });

  await t.test("thrown plugin failure", async () => {
    const actual = await run(new Error("plugin crashed"));
    assert.equal(actual.result.type, "error");
    assert.equal(actual.result.value.message, "plugin crashed");
    assert.equal(actual.buildCalls, 0);
  });

  await t.test("valid multi-file transform", async () => {
    const actual = await run(
      transformPayload({
        stdout: JSON.stringify({
          typescript: {
            "src/playground.ts": "export const transformed = true;",
            "src/helper.ts": "export const helper = true;",
          },
        }),
      }),
    );
    assert.deepEqual(actual.result, {
      type: "success",
      target: "javascript",
      value: "export const compiled = true;",
    });
    assert.equal(actual.buildCalls, 1);
    assert.deepEqual(
      [...actual.writes],
      [
        ["/work/src/playground.ts", "export const transformed = true;"],
        ["/work/src/helper.ts", "export const helper = true;"],
      ],
    );
  });

  await t.test("warning diagnostics", async () => {
    const actual = await run(
      transformPayload({
        stdout: JSON.stringify({
          diagnostics: [
            {
              file: "/work/src/playground.ts",
              category: "warning",
              code: "typia.warning",
              line: 1,
              character: 1,
              messageText: "deprecated transform option",
            },
          ],
          typescript: {
            "src/playground.ts": "export const transformed = true;",
          },
        }),
      }),
    );
    assert.equal(actual.buildCalls, 1);
    assert.equal(actual.result.type, "failure");
    assert.equal(actual.result.value, "export const compiled = true;");
    assert.equal(actual.result.diagnostics[0].severity, "warning");
  });
});
