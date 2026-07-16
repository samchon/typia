import { TestValidator } from "@nestia/e2e";
import { NamingConvention } from "@typia/utils";

import { _isLegalBinding } from "../../internal/_isLegalBinding";

/**
 * Verifies NamingConvention.variable agrees with the JavaScript engine on
 * binding-identifier legality.
 *
 * `variable()` is documented as an identifier-legality predicate, but was
 * implemented as "not in my reserved-word list, and matches an identifier
 * shape". That gap let eight strings through (#2111), and `eval`/`arguments`
 * prove a reserved-word list can never express the rule: they are not reserved
 * words at all, only illegal as BoundNames in strict code. Because
 * `HttpMigrateRouteAccessor` and `HttpMigrateRouteComposer` derive real binding
 * identifiers from this predicate, a false positive emits a module that cannot
 * parse. Expectations therefore come from Node's parser rather than from
 * typia's current output.
 *
 * 1. Cross-check every reserved, strict-reserved, and restricted word against the
 *    engine oracle, so the predicate cannot drift from the grammar.
 * 2. Pin the eight words #2111 reported as false positives.
 * 3. Pin ordinary and contextual names that must stay valid.
 * 4. Assert the deliberate `module` policy, the identifier-shape boundaries, and
 *    that repeated calls are stable.
 */
export const test_naming_convention_variable = (): void => {
  // 1. THE ENGINE IS THE ORACLE
  //
  // Every word the grammar rejects as a binding must be rejected by
  // `variable()`, and every word it accepts must be accepted. `module` is the
  // one deliberate departure and is asserted separately in step 4a, so it is
  // held out of this sweep.
  const words: string[] = [
    // ECMAScript ReservedWord
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
    // strict-mode future reserved words
    "implements",
    "interface",
    "let",
    "package",
    "private",
    "protected",
    "public",
    "static",
    // strict-mode BoundNames restrictions
    "eval",
    "arguments",
    // not reserved -- must stay valid
    "foo",
    "value",
    "async",
    "of",
    "get",
    "set",
    "from",
    "as",
    "target",
    "meta",
    "undefined",
    "NaN",
    "Infinity",
    "globalThis",
    "constructor",
    "prototype",
    "name",
    "length",
  ];
  for (const word of words) {
    TestValidator.equals(
      `variable(${JSON.stringify(word)}) matches the engine`,
      NamingConvention.variable(word),
      _isLegalBinding(word),
    );
  }

  // 2. THE EIGHT WORDS #2111 REPORTED
  //
  // Stated explicitly so a regression names the defect rather than only
  // failing the oracle sweep above.
  for (const word of [
    "await",
    "yield",
    "let",
    "static",
    "implements",
    "interface",
    "eval",
    "arguments",
  ]) {
    TestValidator.equals(
      `variable(${JSON.stringify(word)}) is not a legal binding`,
      NamingConvention.variable(word),
      false,
    );
    TestValidator.equals(
      `escaping ${JSON.stringify(word)} yields a legal binding`,
      NamingConvention.variable(`_${word}`),
      true,
    );
  }

  // 3. ORDINARY AND CONTEXTUAL NAMES STAY VALID
  for (const word of [
    "foo",
    "async",
    "of",
    "get",
    "undefined",
    "NaN",
    "_",
    "$",
  ])
    TestValidator.equals(
      `variable(${JSON.stringify(word)}) stays valid`,
      NamingConvention.variable(word),
      true,
    );

  // 4a. THE DELIBERATE `module` POLICY
  //
  // `function f(module) {}` is legal JavaScript, so the engine accepts it.
  // typia reserves it anyway: shadowing `module` would break `module.exports`
  // in CommonJS output. This asymmetry is policy, not a grammar claim, so it
  // is asserted explicitly rather than swept.
  TestValidator.equals(
    "module is a legal binding per the engine",
    _isLegalBinding("module"),
    true,
  );
  TestValidator.equals(
    "module is reserved by typia policy",
    NamingConvention.variable("module"),
    false,
  );

  // 4b. IDENTIFIER SHAPE BOUNDARIES
  const shapes: [string, boolean][] = [
    ["", false],
    ["9foo", false],
    ["foo bar", false],
    ["foo-bar", false],
    ["foo.bar", false],
    ["foo$bar9", true],
    ["_private", true],
    ["$", true],
  ];
  for (const [input, expected] of shapes)
    TestValidator.equals(
      `variable(${JSON.stringify(input)}) shape`,
      NamingConvention.variable(input),
      expected,
    );

  // 4c. REPEATED CALLS ARE STABLE
  //
  // The predicate must not carry a stateful `/g` regex whose `lastIndex`
  // survives between calls.
  for (let i = 0; i < 4; ++i) {
    TestValidator.equals(
      `variable("foo") is stable on call ${i}`,
      NamingConvention.variable("foo"),
      true,
    );
    TestValidator.equals(
      `variable("let") is stable on call ${i}`,
      NamingConvention.variable("let"),
      false,
    );
  }
};
