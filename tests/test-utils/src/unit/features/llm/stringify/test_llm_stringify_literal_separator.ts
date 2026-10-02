import { IValidation } from "@typia/interface";
import { LlmJson } from "@typia/utils";
import assert from "node:assert/strict";

/**
 * Verifies feedback separators stay outside data strings and error text.
 *
 * A marker substring inside encoded data or metadata is not a comment boundary.
 * Complete line assertions preserve literal content and sibling separators;
 * complete annotation comparisons check that its fields remain intact.
 *
 * 1. Render marker-bearing data with absent, ordinary and marker-bearing errors.
 * 2. Contrast non-last siblings with last values and missing-element placeholders.
 * 3. Check compound values and toJSON results through the same public operation.
 *
 */
export const test_llm_stringify_literal_separator = (): void => {
  const spellings = ["ordinary", "data // ❌ fake", 'quote " // ❌ \\ fake'];
  for (const value of spellings)
    for (const metadata of [
      undefined,
      { expected: "number", description: "ordinary" },
      { expected: "number // ❌ fake", description: "ordinary" },
      { expected: "number", description: "description // ❌ fake" },
      { expected: 'type " // ❌ \\ fake', description: 'text " // ❌ \\ fake' },
    ]) {
      const note = metadata
        ? ` // ❌ ${JSON.stringify([{ path: "$input[0]", ...metadata }])}`
        : "";
      const errors: IValidation.IError[] = metadata
        ? [{ path: "$input[0]", value, ...metadata }]
        : [];
      assert.equal(
        LlmJson.stringify({ success: false, data: [value, "next"], errors }),
        [
          "```json",
          "[",
          `  ${JSON.stringify(value)},${note}`,
          '  "next"',
          "]",
          "```",
        ].join("\n"),
        `array sibling: ${value}/${metadata?.expected}/${metadata?.description}`,
      );
      assert.equal(
        LlmJson.stringify({ success: false, data: [value], errors }),
        ["```json", "[", `  ${JSON.stringify(value)}${note}`, "]", "```"].join(
          "\n",
        ),
        `last array element: ${value}/${metadata?.expected}`,
      );
      const propNote = metadata
        ? ` // ❌ ${JSON.stringify([{ path: "$input.first", ...metadata }])}`
        : "";
      assert.equal(
        LlmJson.stringify({
          success: false,
          data: { first: { toJSON: () => value }, next: 1 },
          errors: metadata
            ? [{ path: "$input.first", value, ...metadata }]
            : [],
        }),
        [
          "```json",
          "{",
          `  "first": ${JSON.stringify(value)},${propNote}`,
          '  "next": 1',
          "}",
          "```",
        ].join("\n"),
        `toJSON sibling: ${value}/${metadata?.expected}/${metadata?.description}`,
      );
    }

  const literal = "data // ❌ fake";
  assert.equal(
    LlmJson.stringify({
      success: false,
      data: [[], "next"],
      errors: [
        {
          path: "$input[0][]",
          expected: "string // ❌ fake",
          value: undefined,
        },
      ],
    }),
    [
      "```json",
      "[",
      "  [",
      '    undefined // ❌ [{"path":"$input[0][]","expected":"string // ❌ fake"}]',
      "  ],",
      '  "next"',
      "]",
      "```",
    ].join("\n"),
    "a placeholder-bearing empty array retains its sibling separator",
  );
  assert.equal(
    LlmJson.stringify({
      success: false,
      data: [literal],
      errors: [{ path: "$input[]", expected: "string", value: undefined }],
    }),
    [
      "```json",
      "[",
      `  ${JSON.stringify(literal)},`,
      '  undefined // ❌ [{"path":"$input[]","expected":"string"}]',
      "]",
      "```",
    ].join("\n"),
    "missing placeholder follows the otherwise last data element",
  );
  assert.equal(
    LlmJson.stringify({
      success: false,
      data: [{}, [], { toJSON: () => ({}) }, { nested: [literal, "next"] }],
      errors: [{ path: "$input[0]", expected: "object // ❌ fake", value: {} }],
    }),
    [
      "```json",
      "[",
      '  {}, // ❌ [{"path":"$input[0]","expected":"object // ❌ fake"}]',
      "  [],",
      "  {},",
      "  {",
      '    "nested": [',
      `      ${JSON.stringify(literal)},`,
      '      "next"',
      "    ]",
      "  }",
      "]",
      "```",
    ].join("\n"),
    "compound siblings and nested marker-bearing data",
  );
};
