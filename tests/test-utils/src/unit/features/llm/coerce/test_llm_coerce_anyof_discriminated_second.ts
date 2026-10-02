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
 * Verifies schema-directed coercion for anyof discriminated second.
 *
 * This case checks that the cat discriminator selects the second referenced
 * object rather than the first object alternative. Authored schema input
 * isolates utility semantics from compiler production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse/coerce calls check that the cat discriminator selects the second referenced object rather than the first object alternative.
 * @evidence contracts/testing.md#independent-expectations Literal schema kinds are authored from the declared fixture shape, not produced by typia. Authored values and explicit scalar, field or complete-array expectations establish the result independently of the conversion implementation; these assertions do not certify unasserted properties.
 * @evidence contracts/testing.md#distinguishing-cases The distinguishing contribution is that the cat discriminator selects the second referenced object rather than the first object alternative. Complementary string/no-string, nullable/non-null and affirmative/negative cases run in the same direct population. An adjacent missing or unknown discriminator control pins unchanged inner text instead of selecting an arbitrary object. This case does not establish malformed-input rejection, reference-cycle handling or the correctness of compiler-produced schemas.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under a plugin-free configuration and oracle. No native producer, installed consumer or host is needed for these assertions; transformer-to-utility assembly remains a separate boundary responsibility.
 */
export const test_llm_coerce_anyof_discriminated_second = (): void => {
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

  // Select the SECOND variant (Cat) to verify discriminator doesn't
  // just pick the first object schema.
  const corrupted = {
    animal: {
      type: "cat",
      meow: JSON.stringify(false) as unknown,
      lives: JSON.stringify(9) as unknown,
    },
  };

  const result = LlmJson.parse<IAnimal>(JSON.stringify(corrupted), parameters);
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    const animal = result.data.animal as ICat;
    TestEquality.equals("type", animal.type, "cat");
    TestEquality.equals("meow", animal.meow, false);
    TestEquality.equals("lives", animal.lives, 9);
  }

  // Missing discriminator cannot justify choosing either referenced object.
  const missing = { animal: { meow: "false", lives: "9" } };
  TestEquality.equals(
    "missing discriminator retains inner text",
    LlmJson.coerce(missing, parameters),
    { animal: { meow: "false", lives: "9" } },
  );
};
