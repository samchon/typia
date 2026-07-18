import { CamelCase, KebabCase, PascalCase, SnakeCase } from "@typia/interface";

/**
 * Pins the `*Case<T>` typings on non-ASCII keys.
 *
 * Issue #2227: the Go notation emit sliced one _byte_ off a key before case
 * converting it, so a multi-byte rune's lead byte became U+FFFD and
 * `PascalCase` of `École` was emitted as `��cole`; it also used Go's _simple_
 * per-rune case mapping where JavaScript uses _full_ case conversion,
 * disagreeing on `ß` -> `SS` and `İ` -> `i` + U+0307. These types are the
 * declared return type of `typia.notations.camel/pascal/snake/kebab`, so this
 * locks the exact keys the emit and the runtime helpers must both produce.
 *
 * Two cases are deliberately absent because the _type_ is the side that differs
 * from the runtime helper, independently of the emit:
 *
 * - `PascalCase<{ "𐐨test": number }>`. `Capitalize` on an astral character
 *   uppercases it under typescript-go but leaves it under `tsc` and under
 *   JavaScript, where `str[0]` is an uncased lone surrogate.
 * - `SnakeCase`/`KebabCase` of a word-final sigma. `SnakageStringRepeatedly`
 *   applies `Lowercase` one character at a time, so `Σ` never sees the
 *   preceding cased character that makes JavaScript's whole-string
 *   `toLowerCase` produce `ς`. `CamelCase`/`PascalCase` lowercase whole
 *   substrings and do agree, which is why the sigma battery below covers them.
 *
 * 1. Assert all four `*Case` typings over a battery of non-ASCII keys covering a
 *    multi-byte first character, a multi-byte character after an underscore, a
 *    single-character key, a combining mark, and full-case-conversion
 *    characters.
 * 2. Assert `CamelCase`/`PascalCase` over a word-final sigma key.
 */
export type NotationUnicodeKeysCases = [
  Assert<IsEqual<CamelCase<Battery>, ExpectedCamel>>,
  Assert<IsEqual<PascalCase<Battery>, ExpectedPascal>>,
  Assert<IsEqual<SnakeCase<Battery>, ExpectedSnake>>,
  Assert<IsEqual<KebabCase<Battery>, ExpectedKebab>>,
  Assert<IsEqual<CamelCase<SigmaBattery>, ExpectedSigmaCamel>>,
  Assert<IsEqual<PascalCase<SigmaBattery>, ExpectedSigmaPascal>>,
];

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;

// Every key is written with `\uXXXX` escapes so an editor cannot silently
// renormalize NFC into NFD, or the reverse, and change what is asserted.
interface Battery {
  "\u00C9cole": number; // multi-byte first character (NFC)
  "\u00F6lwert": number; // multi-byte first character, lowercase
  "\u65E5\u672C\u8A9E": number; // uncased script
  "key_\u00D6lig": number; // multi-byte character right after an underscore
  "\u00D6": number; // a key that is one multi-byte character
  "\u0130stanbul": number; // lowercases to two code points
  "\u00DF": number; // uppercases to two characters
  "e\u0301cole": number; // combining mark (NFD)
  "\u00FCber_Stra\u00DFe": number; // mixed
}

interface ExpectedCamel {
  "\u00E9cole": number;
  "\u00F6lwert": number;
  "\u65E5\u672C\u8A9E": number;
  "key\u00D6lig": number;
  "\u00F6": number;
  "i\u0307stanbul": number;
  "\u00DF": number;
  "e\u0301cole": number;
  "\u00FCberStra\u00DFe": number;
}

interface ExpectedPascal {
  "\u00C9cole": number;
  "\u00D6lwert": number;
  "\u65E5\u672C\u8A9E": number;
  "Key\u00D6lig": number;
  "\u00D6": number;
  "\u0130stanbul": number;
  SS: number;
  "E\u0301cole": number;
  "\u00DCberStra\u00DFe": number;
}

interface ExpectedSnake {
  "\u00E9cole": number;
  "\u00F6lwert": number;
  "\u65E5\u672C\u8A9E": number;
  "key_\u00F6lig": number;
  "\u00F6": number;
  "i\u0307stanbul": number;
  "\u00DF": number;
  "e\u0301cole": number;
  "\u00FCber_stra\u00DFe": number;
}

interface ExpectedKebab {
  "\u00E9cole": number;
  "\u00F6lwert": number;
  "\u65E5\u672C\u8A9E": number;
  "key-\u00F6lig": number;
  "\u00F6": number;
  "i\u0307stanbul": number;
  "\u00DF": number;
  "e\u0301cole": number;
  "\u00FCber-stra\u00DFe": number;
}

interface SigmaBattery {
  "\u0391\u03A3_\u0391\u03A3": number; // word-final sigma
}

interface ExpectedSigmaCamel {
  "\u03B1\u03C2\u0391\u03C3": number;
}

interface ExpectedSigmaPascal {
  "\u0391\u03C3\u0391\u03C3": number;
}
