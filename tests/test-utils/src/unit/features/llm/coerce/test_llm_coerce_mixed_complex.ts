import type { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

interface IComplexNested {
  users: Array<{
    profile: {
      name: string;
      tags: string[];
    };
    scores: number[];
  }>;
  metadata: {
    count: number;
    labels: string[];
  };
}

/**
 * Verifies schema-directed coercion for mixed complex.
 *
 * This case checks that profile text, tag arrays, scores and metadata survive
 * mixed object and array stringification. Authored schema input isolates
 * utility semantics from compiler production.
 *
 * 1. Supply the explicit schema and original malformed or repeatedly encoded
 *    input.
 * 2. Call LlmJson directly and compare every retained result distinction.
 *
 */
export const test_llm_coerce_mixed_complex = (): void => {
  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      users: {
        type: "array",
        items: {
          type: "object",
          properties: {
            profile: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                },
                tags: {
                  type: "array",
                  items: {
                    type: "string",
                  },
                },
              },
              required: ["name", "tags"],
              additionalProperties: false,
            },
            scores: {
              type: "array",
              items: {
                type: "number",
              },
            },
          },
          required: ["profile", "scores"],
          additionalProperties: false,
        },
      },
      metadata: {
        type: "object",
        properties: {
          count: {
            type: "number",
          },
          labels: {
            type: "array",
            items: {
              type: "string",
            },
          },
        },
        required: ["count", "labels"],
        additionalProperties: false,
      },
    },
    required: ["users", "metadata"],
    additionalProperties: false,
    $defs: {},
  };
  const original: IComplexNested = {
    users: [
      {
        profile: { name: "Alice", tags: ["admin", "user"] },
        scores: [95, 87, 92],
      },
    ],
    metadata: { count: 100, labels: ["active", "verified"] },
  };

  const corrupted = {
    users: [
      JSON.stringify({
        profile: JSON.stringify({
          name: original.users[0]!.profile.name,
          tags: JSON.stringify(original.users[0]!.profile.tags),
        }),
        scores: JSON.stringify(original.users[0]!.scores),
      }),
    ],
    metadata: JSON.stringify({
      count: original.metadata.count,
      labels: JSON.stringify(original.metadata.labels),
    }),
  };

  const result = LlmJson.parse<IComplexNested>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals(
      "users[0].profile.name",
      result.data.users[0]!.profile.name,
      "Alice",
    );
    TestEquality.equals(
      "users[0].profile.tags",
      result.data.users[0]!.profile.tags,
      ["admin", "user"],
    );
    TestEquality.equals(
      "users[0].scores",
      result.data.users[0]!.scores,
      [95, 87, 92],
    );
    TestEquality.equals("metadata.count", result.data.metadata.count, 100);
    TestEquality.equals("metadata.labels", result.data.metadata.labels, [
      "active",
      "verified",
    ]);
  }
};
