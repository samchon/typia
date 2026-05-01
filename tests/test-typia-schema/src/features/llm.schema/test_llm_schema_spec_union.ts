import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import typia from "typia";

export const test_llm_schema_spec_union = (): void => {
  interface ICat {
    type: "cat";
    name: string;
    meow: boolean;
  }
  interface IDog {
    type: "dog";
    name: string;
    bark: boolean;
  }
  type IAnimal = ICat | IDog;

  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<IAnimal>($defs);
  TestValidator.equals("union top ref", clean(schema), {
    $ref: "#/$defs/IAnimal",
  });
  TestValidator.equals("union discriminator", clean($defs.IAnimal), {
    anyOf: [
      {
        $ref: "#/$defs/ICat",
      },
      {
        $ref: "#/$defs/IDog",
      },
    ],
    "x-discriminator": {
      propertyName: "type",
      mapping: {
        cat: "#/$defs/ICat",
        dog: "#/$defs/IDog",
      },
    },
  });
  TestValidator.equals("cat literal property", clean($defs.ICat), {
    type: "object",
    properties: {
      meow: {
        type: "boolean",
      },
      name: {
        type: "string",
      },
      type: {
        type: "string",
        enum: ["cat"],
      },
    },
    required: ["type", "name", "meow"],
    additionalProperties: false,
  });
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
