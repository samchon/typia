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
  assert.match(output, /json does not support undefined type in array/);
  assert.match(output, /json does not support Set/);
  assert.match(output, /json does not support Map/);
  assert.match(output, /error TS\(typia\.llm\.parameters\)/);
  assert.match(output, /LLM parameters must be a single object type\./);
  assert.match(output, /Strict mode does not allow dynamic property in object/);
  assert.match(output, /error TS\(typia\.llm\.application\)/);
  assert.match(output, /parameter must be a single object type/);
  assert.match(output, /error TS\(typia\.http\.parameter\)/);
  assert.match(output, /http parameter does not support any type/);
  assert.match(output, /http parameter does not allow union type/);
  assert.match(output, /error TS\(typia\.http\.query\)/);
  assert.match(output, /http query does not support nested object type/);
  assert.match(output, /http query does not support union type in array/);
  assert.match(output, /error TS\(typia\.http\.headers\)/);
  assert.match(output, /http headers does not support union type in property/);
  assert.match(output, /http headers array elements must be atomic or constant/);
  assert.match(output, /http headers does not support tuple type/);
  assert.match(output, /http headers does not support nullable type in property/);
  assert.match(output, /http headers does not support nested object type/);
  assert.match(output, /http headers set-cookie property must be array/);
  assert.match(output, /http headers age property cannot be array/);
  assert.match(output, /http headers has duplicated keys when converting to lowercase letters/);
  assert.match(output, /error TS\(typia\.reflect\.schema\)/);
  assert.match(output, /reflect\.schema does not allow type parameter/);
  assert.match(output, /error TS\(typia\.reflect\.schemas\)/);
  assert.match(output, /reflect\.schemas requires tuple type/);
  assert.match(output, /error TS\(typia\.protobuf\.createAssertEncode\)/);
  assert.match(
    output,
    /protobuf does not support Date type\. Use string type instead\./,
  );
}
