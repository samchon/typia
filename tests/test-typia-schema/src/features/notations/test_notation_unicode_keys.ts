import { TestValidator } from "@nestia/e2e";
import typia from "typia";

/**
 * Verifies notation output equals the `*Case<T>` type on non-ASCII keys.
 *
 * Issue #2227: the Go compile-time emit computed each renamed key by slicing
 * one _byte_ (`value[:1]`) before case converting it, so a multi-byte rune's
 * lead byte could not be decoded and came back as U+FFFD — `pascal` of
 * `\u00C9cole` produced a mojibake key. The static-key path (the emit) then
 * disagreed with the dynamic-key path (the runtime `_notation*` helper) and
 * with the declared return type, so one object could carry two renamings of the
 * same character and reading a declared key returned `undefined`.
 *
 * This pins all three producers at once: assigning to `typia.*Case<T>` and
 * reading each declared key checks the emit against the type, and comparing the
 * `Record` conversion's key set checks the runtime helper against the emit.
 *
 * Every key is written with `\uXXXX` escapes so an editor cannot silently
 * renormalize NFC into NFD, or the reverse, and change what is asserted.
 *
 * The battery deliberately holds only characters whose simple per-rune case
 * mapping equals JavaScript's full case conversion. `ttsc` and `ttsx` ship in
 * the same package but do not agree on the case-mapping intrinsics: `ttsc`
 * computes `Capitalize<"\u00DF">` as `SS` and `Lowercase<"\u0130">` as `i` +
 * U+0307 (full, matching JavaScript), while `ttsx` — which executes this suite
 * — computes them as `\u00DF` and `i` (simple). Those characters are covered
 * where the answer is unambiguous instead: `tests/test-interface` pins them
 * against `ttsc`, and the transform test at
 * `packages/typia/native/cmd/ttsc-typia/notation_unicode_key_transform_test.go`
 * pins the emit against the runtime helper itself.
 *
 * 1. Convert a static-key object under each notation and read every declared key.
 * 2. Convert the same keys through a `Record` (dynamic) and compare the key set.
 */
export const test_notation_unicode_keys = (): void => {
  const value: Battery = {
    "\u00C9cole": 1,
    "\u00F6lwert": 2,
    "\u65E5\u672C\u8A9E": 3,
    "key_\u00D6lig": 4,
    "\u00D6": 5,
    "e\u0301cole": 6,
    "\u00FCber_Stra\u00DFe": 7,
  };

  // ---- static keys: soundness against the declared *Case<T> type ----
  const snaked: typia.SnakeCase<Battery> =
    typia.notations.snake<Battery>(value);
  TestValidator.equals("snake \u00E9cole", snaked["\u00E9cole"], 1);
  TestValidator.equals("snake \u00F6lwert", snaked["\u00F6lwert"], 2);
  TestValidator.equals(
    "snake \u65E5\u672C\u8A9E",
    snaked["\u65E5\u672C\u8A9E"],
    3,
  );
  TestValidator.equals("snake key_\u00F6lig", snaked["key_\u00F6lig"], 4);
  TestValidator.equals("snake \u00F6", snaked["\u00F6"], 5);
  TestValidator.equals("snake e\u0301cole", snaked["e\u0301cole"], 6);
  TestValidator.equals(
    "snake \u00FCber_stra\u00DFe",
    snaked["\u00FCber_stra\u00DFe"],
    7,
  );

  const camelled: typia.CamelCase<Battery> =
    typia.notations.camel<Battery>(value);
  TestValidator.equals("camel \u00E9cole", camelled["\u00E9cole"], 1);
  TestValidator.equals("camel \u00F6lwert", camelled["\u00F6lwert"], 2);
  TestValidator.equals(
    "camel \u65E5\u672C\u8A9E",
    camelled["\u65E5\u672C\u8A9E"],
    3,
  );
  TestValidator.equals("camel key\u00D6lig", camelled["key\u00D6lig"], 4);
  TestValidator.equals("camel \u00F6", camelled["\u00F6"], 5);
  TestValidator.equals("camel e\u0301cole", camelled["e\u0301cole"], 6);
  TestValidator.equals(
    "camel \u00FCberStra\u00DFe",
    camelled["\u00FCberStra\u00DFe"],
    7,
  );

  const pascalled: typia.PascalCase<Battery> =
    typia.notations.pascal<Battery>(value);
  TestValidator.equals("pascal \u00C9cole", pascalled["\u00C9cole"], 1);
  TestValidator.equals("pascal \u00D6lwert", pascalled["\u00D6lwert"], 2);
  TestValidator.equals(
    "pascal \u65E5\u672C\u8A9E",
    pascalled["\u65E5\u672C\u8A9E"],
    3,
  );
  TestValidator.equals("pascal Key\u00D6lig", pascalled["Key\u00D6lig"], 4);
  TestValidator.equals("pascal \u00D6", pascalled["\u00D6"], 5);
  TestValidator.equals("pascal E\u0301cole", pascalled["E\u0301cole"], 6);
  TestValidator.equals(
    "pascal \u00DCberStra\u00DFe",
    pascalled["\u00DCberStra\u00DFe"],
    7,
  );

  const kebabbed: typia.KebabCase<Battery> =
    typia.notations.kebab<Battery>(value);
  TestValidator.equals("kebab \u00E9cole", kebabbed["\u00E9cole"], 1);
  TestValidator.equals("kebab \u00F6lwert", kebabbed["\u00F6lwert"], 2);
  TestValidator.equals(
    "kebab \u65E5\u672C\u8A9E",
    kebabbed["\u65E5\u672C\u8A9E"],
    3,
  );
  TestValidator.equals("kebab key-\u00F6lig", kebabbed["key-\u00F6lig"], 4);
  TestValidator.equals("kebab \u00F6", kebabbed["\u00F6"], 5);
  TestValidator.equals("kebab e\u0301cole", kebabbed["e\u0301cole"], 6);
  TestValidator.equals(
    "kebab \u00FCber-stra\u00DFe",
    kebabbed["\u00FCber-stra\u00DFe"],
    7,
  );

  // ---- dynamic keys: the runtime _notation* helper over the whole matrix ----
  const dynamic: Record<string, number> = { ...value };
  const sortKeys = (input: object): string[] => Object.keys(input).sort();
  TestValidator.equals(
    "snake dynamic key set",
    sortKeys(typia.notations.snake<Record<string, number>>(dynamic)),
    sortKeys(snaked),
  );
  TestValidator.equals(
    "camel dynamic key set",
    sortKeys(typia.notations.camel<Record<string, number>>(dynamic)),
    sortKeys(camelled),
  );
  TestValidator.equals(
    "pascal dynamic key set",
    sortKeys(typia.notations.pascal<Record<string, number>>(dynamic)),
    sortKeys(pascalled),
  );
  TestValidator.equals(
    "kebab dynamic key set",
    sortKeys(typia.notations.kebab<Record<string, number>>(dynamic)),
    sortKeys(kebabbed),
  );
};

interface Battery {
  "\u00C9cole": number; // multi-byte first character (NFC)
  "\u00F6lwert": number; // multi-byte first character, lowercase
  "\u65E5\u672C\u8A9E": number; // uncased script
  "key_\u00D6lig": number; // multi-byte character right after an underscore
  "\u00D6": number; // a key that is one multi-byte character
  "e\u0301cole": number; // combining mark (NFD)
  "\u00FCber_Stra\u00DFe": number; // mixed, with a lowercase-position sharp s
}
