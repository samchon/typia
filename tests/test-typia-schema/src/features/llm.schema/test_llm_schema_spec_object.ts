import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies llm schema spec object against the native typia.llm.schema output.
 *
 * The case builds its input in this file and asserts object top ref, object
 * definition.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.schema is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (object top ref; object definition).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (object top ref; object definition) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_schema_spec_object is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_schema_spec_object = (): void => {
  interface IObjectSpec {
    required: string;
    optional?: number;
    nullable: boolean | null;
  }

  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<IObjectSpec>($defs);
  TestEquality.equals("object top ref", clean(schema), {
    $ref: "#/$defs/IObjectSpec",
  });
  TestEquality.equals("object definition", clean($defs.IObjectSpec), {
    type: "object",
    properties: {
      nullable: {
        anyOf: [
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
  });
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
