import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import typia, { tags } from "typia";

export const test_llm_schema_spec_strict_string = (): void => {
  TestValidator.equals(
    "strict string shifts constraints",
    clean(
      typia.llm.schema<
        string &
          tags.Format<"uuid"> &
          tags.MinLength<36> &
          tags.MaxLength<36> &
          tags.Pattern<"^[0-9a-f-]+$"> &
          tags.ContentMediaType<"text/plain"> &
          tags.Default<"00000000-0000-0000-0000-000000000000">,
        { strict: true }
      >({}),
    ),
    {
      type: "string",
      description: [
        "@minLength 36",
        "@maxLength 36",
        "@format uuid",
        "@pattern ^[0-9a-f-]+$",
        "@contentMediaType text/plain",
        "@default 00000000-0000-0000-0000-000000000000",
      ].join("\n"),
    },
  );
};

export const test_llm_schema_spec_strict_number = (): void => {
  TestValidator.equals(
    "strict number shifts constraints",
    clean(
      typia.llm.schema<
        number &
          tags.Minimum<1> &
          tags.ExclusiveMaximum<10> &
          tags.MultipleOf<1> &
          tags.Default<3>,
        { strict: true }
      >({}),
    ),
    {
      type: "number",
      description: ["@minimum 1", "@exclusiveMaximum 10", "@multipleOf 1"].join(
        "\n",
      ),
    },
  );
};

export const test_llm_schema_spec_strict_array = (): void => {
  TestValidator.equals(
    "strict array shifts constraints",
    clean(
      typia.llm.schema<
        (string & tags.MinLength<1>)[] &
          tags.MinItems<1> &
          tags.MaxItems<3> &
          tags.UniqueItems,
        { strict: true }
      >({}),
    ),
    {
      type: "array",
      items: {
        type: "string",
        description: "@minLength 1",
      },
      description: ["@minItems 1", "@maxItems 3", "@uniqueItems"].join("\n"),
    },
  );
};

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
