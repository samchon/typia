import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies json schema spec union against the native typia.json.schema output.
 *
 * The case builds its input in this file and asserts union discriminator, union
 * refs, cat component.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schema is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (union discriminator; union refs; cat component).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (union discriminator; union refs; cat component) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_schema_spec_union is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
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
  TestEquality.equals("union discriminator", schema.discriminator, {
    propertyName: "type",
    mapping: {
      cat: "#/components/schemas/ICat",
      dog: "#/components/schemas/IDog",
    },
  });
  TestEquality.equals("union refs", schema.oneOf, [
    {
      $ref: "#/components/schemas/ICat",
    },
    {
      $ref: "#/components/schemas/IDog",
    },
  ]);
  TestEquality.equals("cat component", clean(unit.components.schemas?.ICat), {
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
