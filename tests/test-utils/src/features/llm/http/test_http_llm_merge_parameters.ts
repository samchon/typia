import { TestValidator } from "@nestia/e2e";
import { HttpLlm } from "@typia/utils";
import { ILlmSchema } from "typia";

export const test_http_llm_merge_parameters = (): void => {
  TestValidator.equals(
    "atomics",
    HttpLlm.mergeParameters({
      function: {
        name: "test",
        parameters: {
          type: "object",
          properties: {
            a: { type: "boolean" },
            b: { type: "number" },
            c: { type: "string" },
            d: { type: "string" },
          },
          additionalProperties: false,
          required: ["a", "b", "c", "d"],
          $defs: {},
        } satisfies ILlmSchema.IParameters,
        separated: {
          human: {
            type: "object",
            properties: {
              a: { type: "boolean" },
              b: { type: "number" },
            },
            additionalProperties: false,
            required: ["a", "b"],
            $defs: {},
          } satisfies ILlmSchema.IParameters,
          llm: {
            type: "object",
            properties: {
              c: { type: "string" },
              d: { type: "string" },
            },
            additionalProperties: false,
            required: ["c", "d"],
            $defs: {},
          } satisfies ILlmSchema.IParameters,
        },
        validate: null!,
      },
      human: {
        a: false,
        b: 1,
      },
      llm: {
        c: "two",
        d: "three",
      },
    }),
    {
      a: false,
      b: 1,
      c: "two",
      d: "three",
    },
  );
};
