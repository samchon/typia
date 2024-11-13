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
