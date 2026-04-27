import * as assert from "assert";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsc } from "../utils/runTtsc";

export async function test_compile_errors(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "compile-errors");
  const result = runTtsc(["build"], fixture);
  const output = `${result.stdout}\n${result.stderr}`;

  assert.notEqual(result.status, 0, "invalid typia transforms must fail build");
  assert.match(output, /error TS\(typia\.json\.createStringify\)/);
  assert.match(output, /json does not support bigint/);
  assert.match(output, /error TS\(typia\.llm\.parameters\)/);
  assert.match(output, /LLM parameters must be a single object type\./);
  assert.match(output, /Strict mode does not allow dynamic property in object/);
  assert.match(output, /error TS\(typia\.llm\.application\)/);
  assert.match(output, /parameter must be a single object type/);
  assert.match(output, /error TS\(typia\.protobuf\.createAssertEncode\)/);
  assert.match(output, /protobuf does not support Date type\. Use string type instead\./);
}
