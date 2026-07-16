/**
 * String naming convention converters.
 *
 * `NamingConvention` converts between common code naming conventions:
 * camelCase, PascalCase, and snake_case. Handles edge cases like consecutive
 * uppercase letters (e.g., `XMLParser` → `xml_parser`) and leading
 * underscores.
 *
 * Functions:
 *
 * - {@link camel}: Convert to camelCase (`fooBar`)
 * - {@link pascal}: Convert to PascalCase (`FooBar`)
 * - {@link snake}: Convert to snake_case (`foo_bar`)
 * - {@link kebab}: Convert to kebab-case (`foo-bar`)
 * - {@link variable}: Test if string is a legal binding identifier
 * - {@link reserved}: Test if string is a JavaScript reserved word
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export namespace NamingConvention {
  /**
   * Convert to camelCase.
   *
   * @param str Input string
   * @returns CamelCase string
   */
  export function camel(str: string) {
    return unsnake({
      plain: (str) =>
        str.length
          ? str === str.toUpperCase()
            ? str.toLocaleLowerCase()
            : `${str[0]!.toLowerCase()}${str.substring(1)}`
          : str,
      snake: (str, i) =>
        i === 0 ? str.toLowerCase() : capitalize(str.toLowerCase()),
    })(str);
  }

  /**
   * Convert to PascalCase.
   *
   * @param str Input string
   * @returns PascalCase string
   */
  export function pascal(str: string) {
    return unsnake({
      plain: (str) =>
        str.length ? `${str[0]!.toUpperCase()}${str.substring(1)}` : str,
      snake: capitalize,
    })(str);
  }

  /**
   * Convert to snake_case.
   *
   * @param str Input string
   * @returns Snake_case string
   */
  export function snake(str: string): string {
    if (str.length === 0) return str;

    // PREFIX
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let prefix: string = "";
    for (let i: number = 0; i < str.length; i++) {
      if (str[i] === "_") prefix += "_";
      else break;
    }
    if (prefix.length !== 0) str = str.substring(prefix.length);

    const out = (s: string) => `${prefix}${s}`;

    // SNAKE CASE
    const items: string[] = str.split("_");
    if (items.length > 1)
      return out(items.map((s) => s.toLowerCase()).join("_"));

    // CAMEL OR PASCAL CASE
    const indexes: number[] = [];
    for (let i: number = 0; i < str.length; i++) {
      const code: number = str.charCodeAt(i);
      if (65 <= code && code <= 90) indexes.push(i);
    }
    for (let i: number = indexes.length - 1; i > 0; --i) {
      const now: number = indexes[i]!;
      const prev: number = indexes[i - 1]!;
      if (now - prev === 1) indexes.splice(i, 1);
    }
    if (indexes.length !== 0 && indexes[0] === 0) indexes.splice(0, 1);
    if (indexes.length === 0) return out(str.toLowerCase());

    let ret: string = "";
    for (let i: number = 0; i < indexes.length; i++) {
      const first: number = i === 0 ? 0 : indexes[i - 1]!;
      const last: number = indexes[i]!;

      ret += str.substring(first, last).toLowerCase();
      ret += "_";
    }
    ret += str.substring(indexes[indexes.length - 1]!).toLowerCase();
    return out(ret);
  }

  /**
   * Convert to kebab-case.
   *
   * Derives the snake_case form first and then rewrites the word separators to
   * hyphens, keeping any leading underscores untouched.
   *
   * @param str Input string
   * @returns Kebab-case string
   */
  export function kebab(str: string): string {
    const snaked: string = snake(str);
    let prefix: string = "";
    for (let i: number = 0; i < snaked.length; i++) {
      if (snaked[i] === "_") prefix += "_";
      else break;
    }
    return prefix + snaked.substring(prefix.length).split("_").join("-");
  }

  /**
   * Capitalize first character.
   *
   * @param str Input string
   * @returns Capitalized string
   */
  export const capitalize = (str: string): string =>
    str.length !== 0 ? str[0]!.toUpperCase() + str.slice(1) : str;

  /**
   * Lowercase first character.
   *
   * @param str Input string
   * @returns Localized string
   */
  export const localize = (str: string) => str[0]!.toLowerCase() + str.slice(1);

  /**
   * Check if string is valid JavaScript variable name.
   *
   * Returns `true` only when `str` can be used as a *binding* identifier — a
   * declaration, parameter, or import name — in the dialect typia generates:
   * an ES module, which is always strict mode. A string is a valid binding
   * when it has identifier shape and is neither {@link reserved} nor one of
   * the strict-mode restricted binding names (`eval`, `arguments`).
   *
   * The restricted binding names are why this is not derived from
   * {@link reserved} alone. `eval` and `arguments` are not reserved words at
   * all; they are rejected only in binding position under strict mode, so no
   * reserved-word list can express this predicate.
   *
   * Property *access* is a weaker requirement than binding, since dot notation
   * accepts reserved words (`x.let` is legal). Callers escaping a property key
   * rather than declaring a name are therefore held to a stricter rule than
   * they need; that is safe, but they cannot rely on this predicate to mean
   * "needs bracket notation".
   *
   * Identifier shape is restricted to ASCII. JavaScript also admits Unicode
   * identifiers, so this may report `false` for an otherwise legal name. The
   * bias is deliberate: it can only cause a name to be escaped, never to leak
   * an illegal binding.
   *
   * @param str String to check
   * @returns True if valid variable name
   */
  export const variable = (str: string): boolean =>
    IDENTIFIER.test(str) && RESTRICTED.has(str) === false;

  /**
   * Check if string is JavaScript reserved word.
   *
   * Covers every ECMAScript `ReservedWord` plus the future reserved words that
   * apply in strict mode, since typia generates ES modules, which are always
   * strict. `module` is reserved by typia policy rather than by the language:
   * it is a legal identifier, but shadowing it would break `module.exports` in
   * CommonJS output.
   *
   * `eval` and `arguments` are deliberately absent. They are not reserved
   * words — they are merely illegal as binding names in strict code — so
   * {@link variable} rejects them separately.
   *
   * @param str String to check
   * @returns True if reserved word
   */
  export const reserved = (str: string): boolean => RESERVED.has(str);
}

/**
 * Identifier shape, ASCII subset.
 *
 * Declared without the `g` flag on purpose: a global regular expression
 * carries `lastIndex` across `test()` calls, which would make
 * {@link NamingConvention.variable} alternate between answers for the same
 * input once the pattern is hoisted out of the function body.
 */
const IDENTIFIER = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;

/** ECMAScript `ReservedWord`. */
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

/**
 * Future reserved words that apply only in strict mode.
 *
 * Generated ES modules are always strict, so these are reserved for every name
 * typia emits.
 */
const STRICT_RESERVED_WORDS: string[] = [
  "implements",
  "interface",
  "let",
  "package",
  "private",
  "protected",
  "public",
  "static",
];

/**
 * Reserved by typia policy rather than by the language.
 *
 * `module` is a legal JavaScript identifier, but a generated name that shadows
 * it would break `module.exports` in CommonJS output.
 */
const POLICY_RESERVED_WORDS: string[] = ["module"];

/**
 * Names that are illegal in binding position under strict mode without being
 * reserved words.
 *
 * These are the reason {@link NamingConvention.variable} cannot be a
 * reserved-word lookup: `x.eval` and `const { eval: e } = x` are fine, while
 * `function f(eval) {}` is a `SyntaxError` in strict code.
 */
const STRICT_RESTRICTED_BINDINGS: string[] = ["eval", "arguments"];

const RESERVED: Set<string> = new Set([
  ...RESERVED_WORDS,
  ...STRICT_RESERVED_WORDS,
  ...POLICY_RESERVED_WORDS,
]);

const RESTRICTED: Set<string> = new Set([
  ...RESERVED,
  ...STRICT_RESTRICTED_BINDINGS,
]);

const unsnake =
  (props: {
    plain: (str: string) => string;
    snake: (str: string, index: number) => string;
  }) =>
  (str: string): string => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let prefix: string = "";
    for (let i: number = 0; i < str.length; i++) {
      if (str[i] === "_") prefix += "_";
      else break;
    }
    if (prefix.length !== 0) str = str.substring(prefix.length);

    const out = (s: string) => `${prefix}${s}`;
    if (str.length === 0) return out("");

    const items: string[] = str.split("_").filter((s) => s.length !== 0);
    return items.length === 0
      ? out("")
      : items.length === 1
        ? out(props.plain(items[0]!))
        : out(items.map(props.snake).join(""));
  };
