import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies string annotations and literal unions match their complete authored
 * schemas.
 *
 * Native string/tag/literal metadata must reach public schemas without
 * annotation loss.
 *
 * 1. Invoke the schema producer on the type declarations in this file.
 * 2. Assert each annotation has an untagged string control; all three literal
 *    alternatives remain, with only oneOf member order normalized.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that string annotations and literal unions match their complete authored schemas.
 * @evidence contracts/testing.md#independent-expectations Literal email/pattern/2..8/media/default and alpha/beta/gamma expectations come directly from independently declared public tag inputs.
 * @evidence contracts/testing.md#distinguishing-cases Each annotation has an untagged string control; all three literal alternatives remain, with only oneOf member order normalized.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_spec_string through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native string/tag/literal metadata must reach public schemas without annotation loss. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage Each annotation has an untagged string control; all three literal alternatives remain, with only oneOf member order normalized. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
 */
export const test_json_schema_spec_string = (): void => {
  TestEquality.equals("string", clean(typia.json.schema<string>().schema), {
    type: "string",
  });
  TestEquality.equals(
    "format",
    clean(typia.json.schema<string & tags.Format<"email">>().schema),
    {
      type: "string",
      format: "email",
    },
  );
  TestEquality.equals(
    "pattern",
    clean(typia.json.schema<string & tags.Pattern<"^[a-z]+$">>().schema),
    {
      type: "string",
      pattern: "^[a-z]+$",
    },
  );
  TestEquality.equals(
    "length",
    clean(
      typia.json.schema<string & tags.MinLength<2> & tags.MaxLength<8>>()
        .schema,
    ),
    {
      type: "string",
      minLength: 2,
      maxLength: 8,
    },
  );
  TestEquality.equals(
    "content media type",
    clean(
      typia.json.schema<string & tags.ContentMediaType<"image/png">>().schema,
    ),
    {
      type: "string",
      contentMediaType: "image/png",
    },
  );
  TestEquality.equals(
    "default",
    clean(typia.json.schema<string & tags.Default<"guest">>().schema),
    {
      type: "string",
      default: "guest",
    },
  );
  TestEquality.equals(
    "string literal union",
    normalizeOneOf(
      clean(typia.json.schema<"alpha" | "beta" | "gamma">().schema),
    ),
    {
      oneOf: [
        {
          const: "alpha",
        },
        {
          const: "beta",
        },
        {
          const: "gamma",
        },
      ],
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));

const normalizeOneOf = (schema: any): any => ({
  ...schema,
  oneOf: [...schema.oneOf].sort((a, b) =>
    JSON.stringify(a).localeCompare(JSON.stringify(b)),
  ),
});
