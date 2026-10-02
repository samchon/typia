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
 * Verifies schema-directed coercion for anyof discriminated stringify.
 *
 * This case checks that parsing an entire cat member precedes discriminator
 * selection and inner conversion. Authored schema input isolates utility
 * semantics from compiler production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 */
export const test_llm_coerce_anyof_discriminated_stringify = (): void => {
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

  // Entire discriminated union member is double-stringified.
  // After parsing the string, discriminator must identify the right schema.
  const corrupted = {
    animal: JSON.stringify({ type: "cat", meow: true, lives: 9 }) as unknown,
  };

  const result = LlmJson.parse<IAnimal>(JSON.stringify(corrupted), parameters);
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    const animal = result.data.animal as ICat;
    TestEquality.equals("type", animal.type, "cat");
    TestEquality.equals("meow", animal.meow, true);
    TestEquality.equals("lives", animal.lives, 9);
  }

  const unknownAnimal = { type: "bird", meow: "true", lives: "9" };
  TestEquality.equals(
    "encoded unknown discriminator retains inner text",
    LlmJson.coerce({ animal: JSON.stringify(unknownAnimal) }, parameters),
    { animal: { type: "bird", meow: "true", lives: "9" } },
  );
  TestEquality.equals(
    "encoded known discriminator converts inner text",
    LlmJson.coerce(
      { animal: JSON.stringify({ type: "cat", meow: "true", lives: "9" }) },
      parameters,
    ),
    { animal: { type: "cat", meow: true, lives: 9 } },
  );
  const ambiguousParameters: ILlmSchema.IParameters = {
    ...parameters,
    properties: {
      animal: {
        anyOf: [{ $ref: "#/$defs/IDog" }, { $ref: "#/$defs/ICat" }],
      },
    },
  };
  TestEquality.equals(
    "encoded member without discriminator retains inner text",
    LlmJson.coerce(
      { animal: JSON.stringify({ type: "cat", meow: "true", lives: "9" }) },
      ambiguousParameters,
    ),
    { animal: { type: "cat", meow: "true", lives: "9" } },
  );
};
