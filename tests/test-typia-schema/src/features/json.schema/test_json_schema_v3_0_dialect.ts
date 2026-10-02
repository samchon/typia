import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies typia.json.schema emits the OpenAPI 3.0 dialect under "3.0".
 *
 * `json.schema` routes through the same collection writer as `json.schemas`, so
 * the dialect defect was shared: fixing one entry point and leaving the others
 * would still ship a 3.1 document labeled "3.0". This pins the singular entry
 * point, whose root schema is additionally dereferenced out of the components.
 *
 * 1. Declare a type carrying a nullable atomic, a literal union, and a tuple.
 * 2. Emit its single schema under "3.0".
 * 3. Assert the dereferenced root uses the 3.0 spellings only.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that the singular 3.0 schema uses nullable/enum/homogeneous tuple spellings without 3.1-only keywords.
 * @evidence contracts/testing.md#independent-expectations The authored OpenAPI 3.0 expected object and forbidden-keyword list distinguish dialect selection independently of another generated schema.
 * @evidence contracts/testing.md#distinguishing-cases Nullable string, two string literals, positional pair, version and absence of const/prefixItems/type:null remain; sibling schemas/application tests own those entry points.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_v3_0_dialect through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary The public Version generic must select the correct native collection conversion before singular-root dereference. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage Nullable string, two string literals, positional pair, version and absence of const/prefixItems/type:null remain; sibling schemas/application tests own those entry points. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
 */
export const test_json_schema_v3_0_dialect = (): void => {
  interface IV3Single {
    nullableName: string | null;
    literal: "alpha" | "beta";
    pair: [string, number];
  }

  const unit = typia.json.schema<IV3Single, "3.0">();
  TestEquality.equals("version", unit.version, "3.0");
  TestEquality.equals("dereferenced root", clean(unit.schema), {
    type: "object",
    properties: {
      nullableName: { type: "string", nullable: true },
      literal: { type: "string", enum: ["alpha", "beta"] },
      pair: {
        type: "array",
        items: { oneOf: [{ type: "string" }, { type: "number" }] },
        minItems: 2,
        maxItems: 2,
      },
    },
    required: ["nullableName", "literal", "pair"],
    additionalProperties: false,
  });

  const serialized: string = JSON.stringify(unit);
  for (const keyword of ["const", "prefixItems", '"type":"null"'])
    TestEquality.equals(
      `no ${keyword} under 3.0`,
      serialized.includes(keyword),
      false,
    );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
