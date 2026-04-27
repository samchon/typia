import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsc } from "../utils/runTtsc";

/**
 * ImportProgrammer parity: generated LLM and protobuf helpers must use
 * `typia/lib/internal/*` modules and must not pull converter/runtime
 * implementation from `@typia/utils` or `protobufjs`.
 */
export async function test_emit_internal_imports(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "internal-imports");
  const dist = path.join(fixture, "dist");
  fs.rmSync(dist, { recursive: true, force: true });

  const result = runTtsc(
    ["--tsconfig=tsconfig.json", "--emit", "--quiet"],
    fixture,
  );
  assert.equal(result.status, 0, `stderr:\n${result.stderr}`);

  const emitted = fs.readFileSync(path.join(dist, "main.js"), "utf8");
  assert.equal(emitted.includes("@typia/utils"), false);
  assert.equal(emitted.includes("protobufjs"), false);

  for (const name of [
    "_parseLlmArguments",
    "_coerceLlmArguments",
    "_llmApplicationFinalize",
    "_validateReport",
    "_createStandardSchema",
    "_accessExpressionAsString",
    "_isFormatUuid",
    "_isTypeInt32",
    "_isTypeUint32",
    "_isUniqueItems",
    "_isBetween",
    "_jsonStringifyString",
    "_jsonStringifyNumber",
    "_jsonStringifyTail",
    "_miscCloneAny",
    "_notationAny",
    "_notationCamel",
    "_randomArray",
    "_randomFormatRegex",
    "_randomFormatUuid",
    "_randomInteger",
    "_randomString",
    "_ProtobufSizer",
    "_ProtobufWriter",
    "_ProtobufReader",
  ])
    assert.ok(
      emitted.includes(`typia/lib/internal/${name}`),
      `missing typia/lib/internal/${name}`,
    );

  assert.ok(emitted.includes("deprecated: true"));
  assert.ok(emitted.includes('tags: ["users"]'));
  assert.ok(emitted.includes("Search operation.\\n\\nSearch users."));
  assert.ok(emitted.includes('"description":"LLM user payload."'));
  assert.ok(emitted.includes('"description":"Search result payload."'));
  assert.ok(emitted.includes("input.values.map"));
  assert.equal(emitted.includes("JSON.stringify(input.values)"), false);
  assert.ok(emitted.includes("new Blob([new Uint8Array("));
  assert.ok(emitted.includes("new File([new Uint8Array("));
  assert.ok(emitted.includes("minLength: 1, maxLength: 8"));
  assert.ok(emitted.includes("minLength: 3, maxLength: 3"));
}
