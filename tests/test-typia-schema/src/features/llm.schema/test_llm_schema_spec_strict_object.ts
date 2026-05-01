import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import typia from "typia";

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

  TestValidator.equals("strict object top ref", clean(schema), {
    $ref: "#/$defs/IStrictObject",
  });
  TestValidator.equals(
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
  TestValidator.equals("strict nested object", clean($defs.IStrictChild), {
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
