import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

interface IDog {
  type: "dog";
  bark: boolean;
  age: number;
}

interface ICat {
  type: "cat";
  meow: boolean;
  lives: number;
}

interface IAnimal {
  animal: IDog | ICat;
}

/**
 * Verifies schema-directed coercion for anyof discriminated inner.
 *
 * This case checks that the dog discriminator selects the first referenced
 * object and converts its boolean and number fields. Authored schema input
 * isolates utility semantics from compiler production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 */
export const test_llm_coerce_anyof_discriminated_inner = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      animal: {
        anyOf: [
          {
            $ref: "#/$defs/IDog",
          },
          {
            $ref: "#/$defs/ICat",
          },
        ],
        "x-discriminator": {
          propertyName: "type",
          mapping: {
            dog: "#/$defs/IDog",
            cat: "#/$defs/ICat",
          },
        },
      },
    },
    required: ["animal"],
    additionalProperties: false,
    $defs: {
      IDog: {
        type: "object",
        properties: {
          type: {
            type: "string",
            enum: ["dog"],
          },
          bark: {
            type: "boolean",
          },
          age: {
            type: "number",
          },
        },
        required: ["type", "bark", "age"],
        additionalProperties: false,
      },
      ICat: {
        type: "object",
        properties: {
          type: {
            type: "string",
            enum: ["cat"],
          },
          meow: {
            type: "boolean",
          },
          lives: {
            type: "number",
          },
        },
        required: ["type", "meow", "lives"],
        additionalProperties: false,
      },
    },
  };

  // Object value with inner properties double-stringified.
  // Discriminator must identify Dog schema so bark/age are coerced correctly.
  const corrupted = {
    animal: {
      type: "dog",
      bark: JSON.stringify(true) as unknown,
      age: JSON.stringify(5) as unknown,
    },
  };

  const result = LlmJson.parse<IAnimal>(JSON.stringify(corrupted), parameters);
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    const animal = result.data.animal as IDog;
    TestEquality.equals("type", animal.type, "dog");
    TestEquality.equals("bark", animal.bark, true);
    TestEquality.equals("age", animal.age, 5);
  }

  // A discriminator not present in the mapping must not select the first branch.
  const unknown = { animal: { type: "bird", bark: "true", age: "5" } };
  TestEquality.equals(
    "unknown discriminator retains inner text",
    LlmJson.coerce(unknown, parameters),
    { animal: { type: "bird", bark: "true", age: "5" } },
  );
};
