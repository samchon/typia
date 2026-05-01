import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import typia from "typia";

export const test_json_schema_spec_union = (): void => {
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

  const unit = typia.json.schema<IAnimal>();
  const schema = clean(unit.schema) as OpenApi.IJsonSchema.IOneOf;
  TestValidator.equals("union discriminator", schema.discriminator, {
    propertyName: "type",
    mapping: {
      cat: "#/components/schemas/ICat",
      dog: "#/components/schemas/IDog",
    },
  });
  TestValidator.equals("union refs", schema.oneOf, [
    {
      $ref: "#/components/schemas/ICat",
    },
    {
      $ref: "#/components/schemas/IDog",
    },
  ]);
  TestValidator.equals("cat component", clean(unit.components.schemas?.ICat), {
    type: "object",
    properties: {
      meow: {
        type: "boolean",
      },
      name: {
        type: "string",
      },
      type: {
        const: "cat",
      },
    },
    required: ["type", "name", "meow"],
    additionalProperties: false,
  });
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
