import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies llm schema spec strict object against the native typia.llm.schema
 * output.
 *
 * The case builds its input in this file and asserts strict object top ref,
 * strict child ref has no description, strict nested object.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.schema is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (strict object top ref; strict child ref has no description; strict nested object).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (strict object top ref; strict child ref has no description; strict nested object) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_schema_spec_strict_object is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_schema_spec_strict_object = (): void => {
  interface IStrictChild {
    value: string;
  }
  interface IStrictObject {
    /**
     * Child description.
     *
     * It must be cascaded to owner object.
     */
    child: IStrictChild;
    name: string;
  }

  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<IStrictObject, { strict: true }>($defs);

  TestEquality.equals("strict object top ref", clean(schema), {
    $ref: "#/$defs/IStrictObject",
  });
  TestEquality.equals(
    "strict child ref has no description",
    clean($defs.IStrictObject),
    {
      type: "object",
      properties: {
        child: {
          $ref: "#/$defs/IStrictChild",
        },
        name: {
          type: "string",
        },
      },
      required: ["child", "name"],
      additionalProperties: false,
      description: [
        "### Description of {@link child} property:",
        "",
        "> Child description.",
        "> ",
        "> It must be cascaded to owner object.",
      ].join("\n"),
    },
  );
  TestEquality.equals("strict nested object", clean($defs.IStrictChild), {
    type: "object",
    properties: {
      value: {
        type: "string",
      },
    },
    required: ["value"],
    additionalProperties: false,
  });
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
