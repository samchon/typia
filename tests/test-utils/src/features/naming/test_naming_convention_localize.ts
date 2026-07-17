import { TestValidator } from "@nestia/e2e";
import { NamingConvention } from "@typia/utils";

/**
 * Verifies NamingConvention.localize lowercases the first character only.
 *
 * `localize` asserted `str[0]!` without ever checking for it, so the empty
 * string raised a `TypeError` while all five sibling helpers returned `""`
 * (#2136). No in-repo caller could reach that branch — every call site guards on
 * `method.startsWith("create")` — but `@typia/utils` is published, and an
 * external caller has no such guard. Pins the boundary alongside the ordinary
 * conversions so the total contract cannot regress to a partial one.
 *
 * 1. Localize ordinary capitalized, already-lowercase, and single-character
 *    inputs.
 * 2. Localize inputs whose tail must survive untouched, including acronym runs.
 * 3. Localize the empty string and require `""` rather than a throw.
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
    TestValidator.equals(
      `localize(${JSON.stringify(input)})`,
      NamingConvention.localize(input),
      expected,
    );
};
