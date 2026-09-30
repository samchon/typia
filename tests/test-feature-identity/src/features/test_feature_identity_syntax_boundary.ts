import assert from "node:assert/strict";

import { FeatureIdentity } from "../FeatureIdentity";

/**
 * Verifies feature identity follows TypeScript declarations rather than text.
 *
 * A comment or literal can contain a plausible export line without defining a
 * runnable value. Declaration formatting must not hide actual exported tests,
 * and statically non-callable values cannot stand in for a test function.
 *
 * 1. Parse valid modules with literal, comment, nested and non-callable twins.
 * 2. Compare names for direct functions, multiple bindings and erased wrappers.
 * 3. Require a test-named file with no executable declaration to be diagnosed.
 * 4. Require malformed syntax to throw instead of supplying partial identities.
 *
 * @evidence contracts/testing.md#behavioral-verification Actual FeatureIdentity.parse and diagnose are called with independent source fixtures; complete name arrays reject invented declarations, dropped functions and duplicate omissions, while diagnosis rejects a test-named file whose apparent export is only comment text.
 * @evidence contracts/testing.md#independent-expectations Literal expected names follow module-level TypeScript export and JavaScript value syntax, not the analyzer output; comments, string contents and ambient declarations have no executable export, and scalar values are not functions.
 * @evidence contracts/testing.md#distinguishing-cases Block and line comments, literal contents, namespace nesting, primitive operations and ambient declarations contrast with arrow, async, function-expression and function-declaration exports; indentation, split exports, multiple bindings, overload bodies, erased wrappers and escaped Unicode identifiers retain names. Factory and reference initializers retain potential identities without proving callability. Malformed syntax throws, while comment-only source yields a missing-function diagnostic.
 * @evidence contracts/testing.md#execution-ownership The feature-identity workspace explicitly imports and runs this synchronous unit through its own runner; source inputs are strings and assertions call the owning analyzer directly, with no consumer installation, native typia producer, compiler host or process fixture.
 */
export const test_feature_identity_syntax_boundary = (): void => {
  const fixtures: Array<[string, string, string[]]> = [
    ["line comment", "// export const test_comment = () => {};", []],
    ["block comment", "/*\nexport const test_comment = () => {};\n*/", []],
    [
      "template text",
      "const text = `\nexport const test_literal = () => {};\n`;",
      [],
    ],
    [
      "quoted text",
      "const text = 'export const test_literal = () => {};';",
      [],
    ],
    [
      "nested namespace",
      "namespace Inner { export const test_nested = () => {}; }",
      [],
    ],
    ["scalar", "export const test_scalar = 1;", []],
    ["object", "export const test_object = {};", []],
    ["array", "export const test_array = [];", []],
    ["boolean", "export const test_boolean = true;", []],
    ["null", "export const test_null = null;", []],
    ["string value", 'export const test_string = "value";', []],
    ["template value", "export const test_template = `value`;", []],
    ["regexp value", "export const test_regexp = /text/;", []],
    ["negative value", "export const test_negative = -1;", []],
    ["not value", "export const test_not = !true;", []],
    ["typeof value", "export const test_typeof = typeof (() => {});", []],
    ["update value", "let n = 0; export const test_update = n++;", []],
    ["binary value", "export const test_binary = 1 + 2;", []],
    ["ambient function", "export declare function test_ambient(): void;", []],
    ["ambient value", "export declare const test_ambient: () => void;", []],
    ["arrow", "export const test_arrow = (): void => {};", ["test_arrow"]],
    ["indented", "  export const test_indented = () => {};", ["test_indented"]],
    [
      "async",
      "export const test_async = async (): Promise<void> => {};",
      ["test_async"],
    ],
    [
      "multiline export",
      "export\nconst\ntest_multiline\n= () => {};",
      ["test_multiline"],
    ],
    [
      "multiple bindings",
      "export const test_first = () => {}, test_second = () => {};",
      ["test_first", "test_second"],
    ],
    [
      "mixed bindings",
      "export const test_scalar = 1, test_function = () => {};",
      ["test_function"],
    ],
    [
      "function declaration",
      "export function test_function(): void {}",
      ["test_function"],
    ],
    [
      "async function",
      "export async function test_async(): Promise<void> {}",
      ["test_async"],
    ],
    [
      "function expression",
      "export let test_expression = function named() {};",
      ["test_expression"],
    ],
    ["var binding", "export var test_var = () => {};", ["test_var"]],
    [
      "overload implementation",
      "export function test_overload(): void;\nexport function test_overload(): void {}",
      ["test_overload"],
    ],
    [
      "parentheses",
      "export const test_wrapped = (() => {});",
      ["test_wrapped"],
    ],
    [
      "type assertion",
      "export const test_asserted = (() => {}) as (() => void);",
      ["test_asserted"],
    ],
    [
      "satisfies",
      "export const test_satisfied = (() => {}) satisfies (() => void);",
      ["test_satisfied"],
    ],
    [
      "angle assertion",
      "export const test_angle = <(() => void)>(() => {});",
      ["test_angle"],
    ],
    [
      "non-null wrapper",
      "export const test_nonnull = (() => {})!;",
      ["test_nonnull"],
    ],
    [
      "asserted scalar",
      "export const test_scalar = 1 as unknown as (() => void);",
      [],
    ],
    [
      "factory",
      "declare function factory(): () => void; export const test_factory = factory();",
      ["test_factory"],
    ],
    [
      "reference",
      "const inner = () => {}; export const test_reference = inner;",
      ["test_reference"],
    ],
    [
      "renamed export",
      "const inner = () => {}; export { inner as test_renamed };",
      [],
    ],
    ["helper only", "export const helper = () => {};", []],
    ["Unicode identifier", "export const test_챕 = () => {};", ["test_챕"]],
    ["escaped identifier", "export const test_\\u0061 = () => {};", ["test_a"]],
    ["escaped prefix", "export const \\u0074est_a = () => {};", ["test_a"]],
    ["braced escape", "export const test_\\u{CC55} = () => {};", ["test_챕"]],
  ];
  for (const [name, source, expected] of fixtures)
    assert.deepEqual(FeatureIdentity.parse(source), expected, name);

  const exports = FeatureIdentity.parse(
    "/*\nexport const test_phantom = () => {};\n*/",
  );
  assert.equal(
    FeatureIdentity.diagnose([
      {
        suite: "test-fixture",
        path: "tests/test-fixture/src/features/test_phantom.ts",
        basename: "test_phantom",
        exports,
      },
    ]).length,
    1,
    "comment cannot satisfy a test-named file",
  );
  assert.throws(
    () => FeatureIdentity.parse("export const test_broken = ("),
    SyntaxError,
    "invalid syntax cannot provide a partial inventory",
  );
};
