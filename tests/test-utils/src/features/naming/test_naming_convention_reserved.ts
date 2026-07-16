import { TestValidator } from "@nestia/e2e";
import { NamingConvention } from "@typia/utils";

/**
 * Verifies NamingConvention.reserved covers every word reserved in the dialect
 * typia generates.
 *
 * The set shipped `package`, `private`, `protected`, and `public` while
 * omitting `implements`, `interface`, `let`, and `static` — the same
 * strict-mode future-reserved class — and omitted `await`/`yield` outright
 * (#2111). `EndpointUtil.normalize` escapes path segments through this
 * predicate, so an omission silently produces a keyword where an escaped name
 * was intended.
 *
 * `eval` and `arguments` are deliberately _not_ reserved words: they are only
 * restricted as BoundNames in strict code. Keeping them out of `reserved()` is
 * what makes it an honest reserved-word predicate, and is exactly why
 * `variable()` cannot be derived from it alone.
 *
 * 1. Assert every ECMAScript `ReservedWord` is reserved.
 * 2. Assert every strict-mode future reserved word is reserved.
 * 3. Assert `eval`/`arguments` are not reserved words, though not valid bindings.
 * 4. Assert ordinary names are not reserved, and pin the `module` policy.
 */
export const test_naming_convention_reserved = (): void => {
  // 1. ECMAScript ReservedWord (ECMA-262, Keywords and Reserved Words)
  const RESERVED_WORDS: string[] = [
    "await",
    "break",
    "case",
    "catch",
    "class",
    "const",
    "continue",
    "debugger",
    "default",
    "delete",
    "do",
    "else",
    "enum",
    "export",
    "extends",
    "false",
    "finally",
    "for",
    "function",
    "if",
    "import",
    "in",
    "instanceof",
    "new",
    "null",
    "return",
    "super",
    "switch",
    "this",
    "throw",
    "true",
    "try",
    "typeof",
    "var",
    "void",
    "while",
    "with",
    "yield",
  ];
  for (const word of RESERVED_WORDS)
    TestValidator.equals(
      `reserved(${JSON.stringify(word)}) is a ReservedWord`,
      NamingConvention.reserved(word),
      true,
    );

  // 2. STRICT-MODE FUTURE RESERVED WORDS
  //
  // The four that shipped and the four that were omitted are one class; assert
  // them together so the set cannot drift apart again.
  for (const word of [
    "implements",
    "interface",
    "let",
    "package",
    "private",
    "protected",
    "public",
    "static",
  ])
    TestValidator.equals(
      `reserved(${JSON.stringify(word)}) is a strict future reserved word`,
      NamingConvention.reserved(word),
      true,
    );

  // 3. `eval`/`arguments` ARE NOT RESERVED WORDS
  //
  // They are illegal bindings without being reserved words. This split is the
  // root cause recorded in #2111: no reserved-word set can classify them.
  for (const word of ["eval", "arguments"]) {
    TestValidator.equals(
      `reserved(${JSON.stringify(word)}) is not a reserved word`,
      NamingConvention.reserved(word),
      false,
    );
    TestValidator.equals(
      `variable(${JSON.stringify(word)}) is still not a legal binding`,
      NamingConvention.variable(word),
      false,
    );
  }

  // 4a. ORDINARY AND CONTEXTUAL NAMES
  for (const word of [
    "foo",
    "async",
    "of",
    "get",
    "set",
    "from",
    "as",
    "undefined",
    "NaN",
  ])
    TestValidator.equals(
      `reserved(${JSON.stringify(word)}) is not reserved`,
      NamingConvention.reserved(word),
      false,
    );

  // 4b. THE DELIBERATE `module` POLICY
  //
  // `module` is not an ECMAScript reserved word. typia reserves it so that
  // generated names cannot shadow `module.exports` in CommonJS output.
  TestValidator.equals(
    "module is reserved by typia policy",
    NamingConvention.reserved("module"),
    true,
  );
};
