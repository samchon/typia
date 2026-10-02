/**
 * Write a property access on a key as source text.
 *
 * A key that is a legal ASCII identifier and not a reserved word becomes
 * `.key`, and any other key becomes `["key"]` with a JSON string literal.
 *
 * @evidence contracts/common.md#principled-implementation A key that is a legal ASCII identifier and not a reserved word is written as a dot access, and every other key as a bracket access with a JSON string literal, which is a valid JavaScript string literal for any key, so the emitted access expression is correct for every property name. The reserved list is conservative for dot access, which is legal after a dot, so it can only cause an extra bracket form; the strict-mode future reserved words are not in the list.
 * @evidence contracts/common.md#clear-and-simple-design One function with two private helpers, the identifier test and the reserved set.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The decision is purely lexical and no property name is special-cased.
 * @evidence contracts/common.md#meaningful-documentation The doc states the dot and bracket forms and why bracket access is always safe.
 */
export const _accessExpressionAsString = (str: string): string =>
  variable(str) ? `.${str}` : `[${JSON.stringify(str)}]`;

const variable = (str: string): boolean =>
  reserved(str) === false && /^[a-zA-Z_$][a-zA-Z_$0-9]*$/g.test(str);

const reserved = (str: string): boolean => RESERVED.has(str);

const RESERVED: Set<string> = new Set([
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
]);
