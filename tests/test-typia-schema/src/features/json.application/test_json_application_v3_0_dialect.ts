import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies typia.json.application emits the OpenAPI 3.0 dialect under "3.0".
 *
 * `json.application` is the third entry point sharing the collection writer
 * that relabeled a 3.1 document as "3.0". Its function parameter and return
 * schemas are filled from that same collection, so an application document is
 * exactly as mislabeled as a bare schema — and no test knew the dialect here
 * either.
 *
 * 1. Declare a controller whose method takes a tuple and a literal union and
 *    returns a nullable type.
 * 2. Emit its application document under "3.0".
 * 3. Assert the parameter and return schemas use the 3.0 spellings only.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that the 3.0 application keeps exact tuple/literal parameter and nullable output schemas without 3.1-only keywords.
 * @evidence contracts/testing.md#independent-expectations Handwritten parameter/output objects follow the declared lookup signature and OpenAPI 3.0 dialect independently of another schema producer.
 * @evidence contracts/testing.md#distinguishing-cases Version, bounded-array tuple, literal enum, nullable return and global const/prefixItems/type:null absence retain every original assertion.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_application_v3_0_dialect in test-typia-schema start. Actual typia.json calls and any complementary generated validator are rewritten in the suite project; the emitted results are evaluated and consumed in the existing process.
 * @evidence contracts/e2e.md#necessary-boundary Native function signature extraction and application assembly must route parameter/output schemas through the selected dialect. Direct converter/writer unit calls cannot establish actual TypeScript call/signature resolution and evaluated public schema assembly together.
 * @evidence contracts/e2e.md#shared-execution All declared variants join the existing ttsx schema-suite project and process. Siblings reuse the content-keyed native plugin artifact; the case adds no independent compiler launch or install per type/dialect.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Generated collections/applications and conversion projections are invocation-local; declarations remain immutable. ttsc owns content-keyed artifact invalidation and the suite owns process termination. No cold-cache or installation transition is asserted.
 * @evidence contracts/e2e.md#preserved-coverage Version, bounded-array tuple, literal enum, nullable return and global const/prefixItems/type:null absence retain every original assertion. Every original producer call, conversion and assertion remains enrolled under the same exported name; no meaningfully different dialect or graph consumer was deleted.
 */
export const test_json_application_v3_0_dialect = (): void => {
  interface IV3Controller {
    lookup(pair: [string, number], literal: "alpha" | "beta"): string | null;
  }

  const app = typia.json.application<IV3Controller, "3.0">();
  TestEquality.equals("version", app.version, "3.0");

  const fn = app.functions[0]!;
  TestEquality.equals("tuple parameter", clean(fn.parameters[0]!.schema), {
    type: "array",
    items: { oneOf: [{ type: "string" }, { type: "number" }] },
    minItems: 2,
    maxItems: 2,
  });
  TestEquality.equals("literal parameter", clean(fn.parameters[1]!.schema), {
    type: "string",
    enum: ["alpha", "beta"],
  });
  TestEquality.equals("nullable output", clean(fn.output?.schema), {
    type: "string",
    nullable: true,
  });

  const serialized: string = JSON.stringify(app);
  for (const keyword of ["const", "prefixItems", '"type":"null"'])
    TestEquality.equals(
      `no ${keyword} under 3.0`,
      serialized.includes(keyword),
      false,
    );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
