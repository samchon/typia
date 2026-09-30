import { TestEquality } from "@typia/template/equality";
import { LlmJson, dedent } from "@typia/utils";

/**
 * Verifies dedent preserves interpolation text and literal marker-like text.
 *
 * Dedenting changes the template's shared indentation, not the supplied values.
 * Replacement-string metacharacters and strings resembling an implementation
 * marker must therefore survive verbatim, including across interpolations.
 *
 * 1. Preserve dollar metacharacters and marker-like literals and values.
 * 2. Remove common template indentation while preserving multiline values.
 * 3. Check empty, blank, mixed-indent and adjacent-interpolation boundaries.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct dedent results are compared with literal expected strings, and actual LlmJson failure feedback must preserve the supplied JSON string; dollar substitution, marker collisions, cascading substitution and interpolation indentation changes alter those assertions.
 * @evidence contracts/testing.md#independent-expectations Expected strings come from the template text's minimum indentation and verbatim String conversion of supplied values; no generated template or current implementation output supplies an oracle.
 * @evidence contracts/testing.md#distinguishing-cases Dollar metacharacters, marker-like literals and values, adjacent and multiline interpolations, empty and blank templates, tabs, scalar values and ordinary text distinguish preservation from accidental replacement and whitespace trimming.
 * @evidence contracts/testing.md#execution-ownership test-utils-unit's start command registers this exported function with node:test under a config without the typia plugin; direct utility and feedback calls require no generated fixture, product native artifact or provider.
 */
export const test_dedent_interpolation = (): void => {
  for (const value of [
    "$&",
    "$$",
    "$`",
    "$'",
    "__PLACEHOLDER_0__",
    "__PLACEHOLDER_1__",
  ])
    TestEquality.equals(
      "literal interpolation",
      `value: ${value}`,
      dedent`value: ${value}`,
    );
  TestEquality.equals(
    "marker-like literal",
    "literal __PLACEHOLDER_0__ and x",
    dedent`literal __PLACEHOLDER_0__ and ${"x"}`,
  );
  TestEquality.equals(
    "no cascading interpolation",
    "__PLACEHOLDER_1__:tail",
    dedent`${"__PLACEHOLDER_1__"}:${"tail"}`,
  );
  TestEquality.equals(
    "adjacent scalars",
    "false0x",
    dedent`${false}${0}${"x"}`,
  );
  TestEquality.equals(
    "multiline interpolation",
    "first\n  value=a\n    b\nlast",
    dedent`
    first
      value=${"a\n    b"}
    last
  `,
  );
  TestEquality.equals("blank template", "", dedent` \n \t\n `);
  TestEquality.equals("empty template", "", dedent``);
  TestEquality.equals("empty interpolation", "", dedent`${""}`);
  TestEquality.equals(
    "tab indentation",
    "first\n  second",
    dedent`\n\tfirst\n\t  second\n`,
  );
  TestEquality.equals(
    "CRLF preservation",
    "first\r\n  second\r",
    dedent`\r\n  first\r\n    second\r\n`,
  );
  TestEquality.equals(
    "relative indentation",
    "first\n  second\n\nthird",
    dedent`
    first
      second

    third
  `,
  );
  for (const value of ["$&", "$$", "$`", "$'", "__PLACEHOLDER_0__"]) {
    const feedback = LlmJson.stringify({
      success: false,
      data: { value },
      errors: [{ path: "$input.value", expected: "number", value }],
    });
    TestEquality.equals(
      "feedback preserves data",
      true,
      feedback.includes(JSON.stringify(value)),
    );
  }
};
