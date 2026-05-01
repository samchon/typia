import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsc } from "../utils/runTtsc";

export async function test_emit_llm_schema_no_utils_import(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "llm-schema");
  const dist = path.join(fixture, "dist");
  fs.rmSync(dist, { recursive: true, force: true });

  const result = runTtsc(
    ["--tsconfig=tsconfig.json", "--emit", "--quiet"],
    fixture,
  );
  assert.equal(result.status, 0, `stderr:\n${result.stderr}`);

  const mainPath = path.join(dist, "main.js");
  const emitted = fs.readFileSync(mainPath, "utf8");
  assert.equal(emitted.includes("@typia/utils"), false);
  assert.equal(emitted.includes("__typia_utils"), false);
  assert.equal(emitted.includes("LlmSchemaConverter"), false);

  delete require.cache[require.resolve(mainPath)];
  const mod = require(mainPath) as {
    $defs: Record<string, unknown>;
    schema: { $ref: string };
    parameters: {
      type: string;
      properties: Record<string, unknown>;
      required: string[];
      additionalProperties: boolean;
      $defs: Record<string, unknown>;
    };
  };

  assert.equal(mod.schema.$ref, "#/$defs/Member");
  assert.ok("Member" in mod.$defs);
  assert.equal(mod.parameters.type, "object");
  assert.deepEqual([...mod.parameters.required].sort(), ["id", "name"]);
  assert.ok("email" in mod.parameters.properties);
  assert.equal(mod.parameters.additionalProperties, false);
}
