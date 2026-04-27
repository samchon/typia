import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsc } from "../utils/runTtsc";

/**
 * End-to-end smoke for `typia.json.schema<T>()`. Verifies the emitted JSON
 * Schema carries the correct type info and folds typia tags into OpenAPI
 * v3.1 constraints.
 */
export async function test_emit_json_schema(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "schema");
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
    memberSchema: {
      version: string;
      components: Record<string, unknown>;
      schema: Record<string, unknown>;
    };
    stringSchema: {
      version: string;
      components: Record<string, unknown>;
      schema: Record<string, unknown>;
    };
    uploadSchemaV30: {
      version: string;
      schema: Record<string, any>;
    };
    collectionV30: {
      version: string;
      schemas: Record<string, unknown>[];
    };
    applicationV30: {
      version: string;
      components: { schemas: Record<string, any> };
      functions: Array<{ name: string; parameters: Array<{ schema: any }> }>;
    };
  };

  // string schema — simplest case.
  assert.equal(mod.stringSchema.version, "3.1");
  assert.deepEqual(mod.stringSchema.schema, { type: "string" });

  // Member schema — type/required/properties + tag folding.
  const m = mod.memberSchema.schema as any;
  assert.equal(m.type, "object");
  assert.equal(m.additionalProperties, false);
  assert.deepEqual(
    [...m.required].sort(),
    ["age", "email", "id"],
    "required list mismatch",
  );
  assert.deepEqual(m.properties.id, { type: "string" });
  assert.deepEqual(m.properties.email, { type: "string", format: "email" });
  // Minimum tag folds in; we also expect just number + minimum keys.
  assert.equal(m.properties.age.type, "number");
  assert.equal(m.properties.age.minimum, 0);

  // Version generic and Blob/File schema behavior.
  assert.equal(mod.uploadSchemaV30.version, "3.0");
  assert.equal(mod.collectionV30.version, "3.0");
  assert.equal(mod.applicationV30.version, "3.0");
  assert.deepEqual(mod.uploadSchemaV30.schema.properties.file, {
    type: "string",
    format: "binary",
  });
  assert.equal(mod.uploadSchemaV30.schema.properties.optional.nullable, true);
  assert.equal(mod.applicationV30.functions.length, 1);
  assert.equal(mod.applicationV30.functions[0]!.name, "upload");
  assert.deepEqual(mod.applicationV30.functions[0]!.parameters[0]!.schema, {
    $ref: "#/components/schemas/Upload",
  });
  assert.deepEqual(mod.applicationV30.components.schemas.Upload.properties.file, {
    type: "string",
    format: "binary",
  });
}
