import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies numeric type tags, comment spellings, ranges, multiples and literal
 * unions match complete authored schemas.
 *
 * Native tag/comment metadata and numeric schema generation must agree across
 * public source spellings.
 *
 * 1. Invoke the schema producer on the type declarations in this file.
 * 2. Assert signed/unsigned 8/16/32-bit spellings, comment tags,
 *    inclusive/exclusive limits, factor 5 and 1|2|3 alternatives retain every
 *    check; storage width upper limits are not schema assertions here.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that numeric type tags, comment spellings, ranges, multiples and literal unions match complete authored schemas.
 * @evidence contracts/testing.md#independent-expectations The independent number/integer/unsigned-minimum contract and declared tag bounds define expectations; equalsSchema compares both directions using the shared equality helper.
 * @evidence contracts/testing.md#distinguishing-cases Signed/unsigned 8/16/32-bit spellings, comment tags, inclusive/exclusive limits, factor 5 and 1|2|3 alternatives retain every check; storage width upper limits are not schema assertions here.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_spec_number through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native tag/comment metadata and numeric schema generation must agree across public source spellings. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage Signed/unsigned 8/16/32-bit spellings, comment tags, inclusive/exclusive limits, factor 5 and 1|2|3 alternatives retain every check; storage width upper limits are not schema assertions here. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
 */
export const test_json_schema_spec_number = (): void => {
  interface ICommentTypeNumbers {
    /** @type int8 */
    int8: number;

    /** @type uint8 */
    uint8: number;

    /** @type int16 */
    int16: number;

    /** @type uint16 */
    uint16: number;
  }

  equalsSchema("number", clean(typia.json.schema<number>().schema), {
    type: "number",
  });
  equalsSchema(
    "int32",
    clean(typia.json.schema<number & tags.Type<"int32">>().schema),
    {
      type: "integer",
    },
  );
  equalsSchema(
    "int8",
    clean(typia.json.schema<number & tags.Type<"int8">>().schema),
    {
      type: "integer",
    },
  );
  equalsSchema(
    "int16",
    clean(typia.json.schema<number & tags.Type<"int16">>().schema),
    {
      type: "integer",
    },
  );
  equalsSchema(
    "uint32",
    clean(typia.json.schema<number & tags.Type<"uint32">>().schema),
    {
      type: "integer",
      minimum: 0,
    },
  );
  equalsSchema(
    "uint8",
    clean(typia.json.schema<number & tags.Type<"uint8">>().schema),
    {
      type: "integer",
      minimum: 0,
    },
  );
  equalsSchema(
    "uint16",
    clean(typia.json.schema<number & tags.Type<"uint16">>().schema),
    {
      type: "integer",
      minimum: 0,
    },
  );
  equalsSchema(
    "inclusive range",
    clean(
      typia.json.schema<number & tags.Minimum<1> & tags.Maximum<10>>().schema,
    ),
    {
      type: "number",
      minimum: 1,
      maximum: 10,
    },
  );
  equalsSchema(
    "exclusive range",
    clean(
      typia.json.schema<
        number & tags.ExclusiveMinimum<1> & tags.ExclusiveMaximum<10>
      >().schema,
    ),
    {
      type: "number",
      exclusiveMinimum: 1,
      exclusiveMaximum: 10,
    },
  );
  equalsSchema(
    "multipleOf",
    clean(typia.json.schema<number & tags.MultipleOf<5>>().schema),
    {
      type: "number",
      multipleOf: 5,
    },
  );
  equalsSchema(
    "comment type smaller integers",
    clean(typia.json.schema<ICommentTypeNumbers>().schema),
    {
      type: "object",
      properties: {
        int8: {
          type: "integer",
        },
        int16: {
          type: "integer",
        },
        uint8: {
          type: "integer",
          minimum: 0,
        },
        uint16: {
          type: "integer",
          minimum: 0,
        },
      },
      required: ["int8", "uint8", "int16", "uint16"],
      additionalProperties: false,
    },
  );
  equalsSchema(
    "number literal union",
    normalizeOneOf(clean(typia.json.schema<1 | 2 | 3>().schema)),
    {
      oneOf: [
        {
          const: 1,
        },
        {
          const: 2,
        },
        {
          const: 3,
        },
      ],
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));

const equalsSchema = (
  title: string,
  actual: unknown,
  expected: unknown,
): void => {
  TestEquality.equals(`${title}.actual`, actual, expected);
  TestEquality.equals(`${title}.expected`, expected, actual);
};

const normalizeOneOf = (schema: any): any => ({
  ...schema,
  oneOf: [...schema.oneOf].sort((a, b) =>
    JSON.stringify(a).localeCompare(JSON.stringify(b)),
  ),
});
