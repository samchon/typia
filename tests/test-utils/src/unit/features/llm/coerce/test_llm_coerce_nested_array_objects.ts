import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

interface IArrayOfUsers {
  users: Array<{
    name: string;
    age: number;
  }>;
}

/**
 * Verifies schema-directed coercion for nested array objects.
 *
 * This case checks that two stringified users retain their distinct names and
 * ages. Authored schema input isolates utility semantics from compiler
 * production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 */
export const test_llm_coerce_nested_array_objects = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      users: {
        type: "array",
        items: {
          type: "object",
          properties: {
            name: {
              type: "string",
            },
            age: {
              type: "number",
            },
          },
          required: ["name", "age"],
          additionalProperties: false,
        },
      },
    },
    required: ["users"],
    additionalProperties: false,
    $defs: {},
  };
  const original: IArrayOfUsers = {
    users: [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
    ],
  };

  const corrupted = {
    users: original.users.map((u) => JSON.stringify(u) as unknown),
  };

  const result = LlmJson.parse<IArrayOfUsers>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("users[0].name", result.data.users[0]!.name, "Alice");
    TestEquality.equals("users[0].age", result.data.users[0]!.age, 30);
    TestEquality.equals("users[1].name", result.data.users[1]!.name, "Bob");
    TestEquality.equals("users[1].age", result.data.users[1]!.age, 25);
  }
};
