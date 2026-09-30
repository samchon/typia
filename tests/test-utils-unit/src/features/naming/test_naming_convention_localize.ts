import { TestEquality } from "@typia/template/equality";
import { NamingConvention } from "@typia/utils";

/**
 * Verifies NamingConvention.localize lowercases the first character only.
 *
 * `localize` asserted `str[0]!` without ever checking for it, so the empty
 * string raised a `TypeError` while all five sibling helpers returned `""`
 * (#2136). No in-repo caller could reach that branch — every call site guards
 * on `method.startsWith("create")` — but `@typia/utils` is published, and an
 * external caller has no such guard. Pins the boundary alongside the ordinary
 * conversions so the total contract cannot regress to a partial one.
 *
 * 1. Localize ordinary capitalized, already-lowercase, and single-character
 *    inputs.
 * 2. Localize inputs whose tail must survive untouched, including acronym runs.
 * 3. Localize the empty string and require `""` rather than a throw.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct localize calls assert a lowercase first character with an unchanged tail, catching the former empty-input exception and accidental whole-string lowercasing.
 * @evidence contracts/testing.md#independent-expectations The documented first-character-only contract yields literal expectations, including xMLParser and unchanged punctuation prefixes.
 * @evidence contracts/testing.md#distinguishing-cases Capitalized, already localized and single-character names, acronym tails, nonletter prefixes and empty input cover both changed and preserved positions.
 * @evidence contracts/testing.md#execution-ownership The utility-unit Node runner registers this exported case and invokes NamingConvention directly without installing a consumer, applying typia's transform or starting a product host.
 */
export const test_naming_convention_localize = (): void => {
  const expectations: [string, string][] = [
    ["Is", "is"],
    ["Assert", "assert"],
    ["ValidateEquals", "validateEquals"],
    ["already", "already"],
    ["A", "a"],
    ["XMLParser", "xMLParser"],
    ["_private", "_private"],
    ["1st", "1st"],
    ["", ""],
  ];
  for (const [input, expected] of expectations)
    TestEquality.equals(
      `localize(${JSON.stringify(input)})`,
      NamingConvention.localize(input),
      expected,
    );
};
