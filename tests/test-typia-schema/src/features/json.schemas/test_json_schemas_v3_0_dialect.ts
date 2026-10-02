import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies typia.json.schemas emits the OpenAPI 3.0 dialect under "3.0".
 *
 * The "3.0" writer used to build the 3.1 document and rewrite only its version
 * string, so a document declaring 3.0 still carried the three constructs 3.0
 * does not define: a `{"type": "null"}` union member instead of the `nullable`
 * flag, `const`, and `prefixItems`. The expectations below come from the
 * OpenAPI 3.0 specification, not from what the emitter happens to produce.
 *
 * 1. Declare a type carrying a nullable atomic, a string literal union, and a
 *    tuple — one witness for each dialect difference.
 * 2. Emit its schema collection under "3.0".
 * 3. Assert the 3.0 spellings are used and that no 3.1-only keyword survives.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that the 3.0 collection publishes the exact nullable/enum/bounded-array component and no 3.1-only constructs.
 * @evidence contracts/testing.md#independent-expectations Handwritten OpenAPI 3.0 schema expectations establish nullable:true, enum and homogeneous tuple degradation; version alone cannot certify dialect.
 * @evidence contracts/testing.md#distinguishing-cases Version/root reference/complete component and global absence of const/prefixItems/type:null remain; singular and application siblings own their entry-point assembly.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schemas_v3_0_dialect in test-typia-schema start. Actual typia.json calls and any complementary generated validator are rewritten in the suite project; the emitted results are evaluated and consumed in the existing process.
 * @evidence contracts/e2e.md#necessary-boundary The public Version generic must select real dialect conversion before native collection publication. Direct converter/writer unit calls cannot establish actual TypeScript call/signature resolution and evaluated public schema assembly together.
 * @evidence contracts/e2e.md#shared-execution All declared variants join the existing ttsx schema-suite project and process. Siblings reuse the content-keyed native plugin artifact; the case adds no independent compiler launch or install per type/dialect.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Generated collections/applications and conversion projections are invocation-local; declarations remain immutable. ttsc owns content-keyed artifact invalidation and the suite owns process termination. No cold-cache or installation transition is asserted.
 * @evidence contracts/e2e.md#preserved-coverage Version/root reference/complete component and global absence of const/prefixItems/type:null remain; singular and application siblings own their entry-point assembly. Every original producer call, conversion and assertion remains enrolled under the same exported name; no meaningfully different dialect or graph consumer was deleted.
 */
export const test_json_schemas_v3_0_dialect = (): void => {
  interface IV3Target {
    nullableName: string | null;
    literal: "alpha" | "beta";
    pair: [string, number];
  }

  const collection = typia.json.schemas<[IV3Target], "3.0">();
  TestEquality.equals("collection version", collection.version, "3.0");
  TestEquality.equals("root reference", clean(collection.schemas), [
    { $ref: "#/components/schemas/IV3Target" },
  ]);
  TestEquality.equals(
    "downgraded component",
    clean(collection.components.schemas?.IV3Target),
    {
      type: "object",
      properties: {
        // 3.0 has no `{"type": "null"}` union member; nullability is a flag.
        nullableName: { type: "string", nullable: true },
        // 3.0 has no `const`; a literal is a single-valued `enum`.
        literal: { type: "string", enum: ["alpha", "beta"] },
        // 3.0 has no `prefixItems`; a tuple degrades to a bounded array.
        pair: {
          type: "array",
          items: { oneOf: [{ type: "string" }, { type: "number" }] },
          minItems: 2,
          maxItems: 2,
        },
      },
      required: ["nullableName", "literal", "pair"],
      additionalProperties: false,
    },
  );

  // The negative twin: no 3.1-only keyword may appear anywhere in the document.
  const serialized: string = JSON.stringify(collection);
  for (const keyword of ["const", "prefixItems", '"type":"null"'])
    TestEquality.equals(
      `no ${keyword} under 3.0`,
      serialized.includes(keyword),
      false,
    );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
