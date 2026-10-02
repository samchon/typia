import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies object and record schemas follow OpenAPI required semantics.
 *
 * Locks the object/record fixture used by the JSON schema spec tests. Named
 * object properties must still populate `properties` and `required`, but
 * record-only objects have no named keys and therefore omit both keywords.
 *
 * 1. Generate schema for an object with required, optional, and nullable fields.
 * 2. Assert its named required properties are retained.
 * 3. Generate a record schema and assert it has no named-object keywords.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that required, optional and nullable fields coexist while record-only schemas omit named-object keywords.
 * @evidence contracts/testing.md#independent-expectations Authored object/record expectations come from the declared property semantics; nullability does not make a property optional.
 * @evidence contracts/testing.md#distinguishing-cases Required string/nullable boolean remain required, optional number remains outside required, and the pure record has constrained additionalProperties only.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_spec_object_record through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native named-object and index-signature metadata must preserve distinct public schema keyword sets. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage Required string/nullable boolean remain required, optional number remains outside required, and the pure record has constrained additionalProperties only. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
 */
export const test_json_schema_spec_object_record = (): void => {
  interface IObjectSpec {
    required: string;
    optional?: number;
    nullable: boolean | null;
  }

  TestEquality.equals(
    "object",
    clean(typia.json.schema<IObjectSpec>().schema),
    {
      type: "object",
      properties: {
        nullable: {
          oneOf: [
            {
              type: "null",
            },
            {
              type: "boolean",
            },
          ],
        },
        optional: {
          type: "number",
        },
        required: {
          type: "string",
        },
      },
      required: ["required", "nullable"],
      additionalProperties: false,
    },
  );

  TestEquality.equals(
    "record",
    clean(
      typia.json.schema<Record<string, string & tags.MinLength<1>>>().schema,
    ),
    {
      type: "object",
      additionalProperties: {
        type: "string",
        minLength: 1,
      },
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
