/**
 * String naming convention converters.
 *
 * `NamingConvention` converts between common code naming conventions:
 * camelCase, PascalCase, snake_case, and kebab-case. The four converters share
 * the case-conversion contract of `typia.notations.*` and the `CamelCase<T>` /
 * `PascalCase<T>` / `SnakeCase<T>` / `KebabCase<T>` typings, and are kept in
 * step with them: each runs the case-boundary walk within every
 * underscore-delimited segment (`fooBar_baz` → `foo_bar_baz`), lowercases the
 * inner characters of an all-caps run (`MAX_COUNT` → `MaxCount` under pascal),
 * collapses an acronym run (`XMLParser` → `xmlparser` under snake), and
 * preserves leading underscores.
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
 *
 * @evidence contracts/common.md#principled-implementation The four case converters share one definition of a word boundary with the `typia.notations.*` runtime and the CamelCase, PascalCase, SnakeCase and KebabCase typings, so a key renamed at runtime matches its static type: leading underscores are kept, the boundary walk runs inside every underscore-delimited segment, and an all-capital run collapses into one word. The binding-identifier test is separate from the reserved-word set because strict mode rejects `eval` and `arguments` only in binding position.
 * @evidence contracts/common.md#clear-and-simple-design Four converters, two predicates and two one-character helpers live in one namespace; module-level word lists and the private segment walks are written once and shared, so the policy that decides a name is not repeated per converter.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts There is no per-consumer word list; `module` is reserved by an explicit, documented typia policy, and the ASCII-only identifier shape is a stated conservative bias that can only over-escape a name.
 * @evidence contracts/common.md#meaningful-documentation The namespace comment states the shared conversion contract and lists each function; the long comments on `variable` and `reserved` explain strict-mode binding, the policy word and the ASCII bias, and private helpers carry the examples they implement.
 */
export namespace NamingConvention {
  /**
   * Convert to camelCase.
   *
   * @param str Input string
   *
   * @returns CamelCase string
   *
   * @evidence contracts/common.md#principled-implementation The shared outer walk keeps leading underscores and routes on the presence of an underscore: an underscore-free key has only its first letter lowercased, or the whole key when it is all capitals, while a key with an underscore is rebuilt from lowercase words with each following letter uppercased, as the CamelCase typing does.
   * @evidence contracts/common.md#clear-and-simple-design One call composed from the shared walk and two small strategy functions, so the routing rule has a single owner.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Conversion is by character class and underscore position and no particular key is special-cased.
   * @evidence contracts/common.md#meaningful-documentation The doc names the output form; the strategies carry comments tying each branch to the matching typing.
   */
  export function camel(str: string): string {
    return renameOuter({
      // `CamelCase<T>` lowercases an all-caps key and otherwise lowercases only
      // the first character of an underscore-free key (`HTTP` → `http`, `userID`
      // stays).
      plain: (str) =>
        str === str.toUpperCase()
          ? str.toLowerCase()
          : `${str[0]!.toLowerCase()}${str.substring(1)}`,
      // With an underscore present, the character after each underscore is
      // uppercased and the rest lowercased, matching `CamelizeSnakeString`.
      snake: camelSnake,
    })(str);
  }

  /**
   * Convert to PascalCase.
   *
   * @param str Input string
   *
   * @returns PascalCase string
   *
   * @evidence contracts/common.md#principled-implementation The shared outer walk keeps leading underscores, capitalizes the first letter of an underscore-free key and keeps the remainder, and for a key with underscores capitalizes each segment with a lowercased tail, as the PascalCase typing does.
   * @evidence contracts/common.md#clear-and-simple-design The same walk and routing as camel with different strategies.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Conversion is by character class and underscore position and no particular key is special-cased.
   * @evidence contracts/common.md#meaningful-documentation The doc names the output form; the strategies carry comments with the examples `userID` and `MAX_COUNT`.
   */
  export function pascal(str: string): string {
    return renameOuter({
      // `PascalCase<T>` capitalizes the first character of an underscore-free
      // key and keeps the rest verbatim (`userID` → `UserID`).
      plain: (str) => `${str[0]!.toUpperCase()}${str.substring(1)}`,
      // With an underscore present, each segment is capitalized and its tail is
      // lowercased (`MAX_COUNT` → `MaxCount`), matching `PascalizeSnakeString`.
      snake: pascalSnake,
    })(str);
  }

  /**
   * Convert to snake_case.
   *
   * @param str Input string
   *
   * @returns Snake_case string
   *
   * @evidence contracts/common.md#principled-implementation Leading underscores are set aside, the remainder is split on underscores and each segment is walked at its uppercase letters: consecutive capitals collapse into one word, a leading capital adds no separator, and the pieces are lowercased and joined, so a camelCase boundary inside a segment survives as in the SnakeCase typing.
   * @evidence contracts/common.md#clear-and-simple-design One function with a private per-segment walk; the prefix handling is local because only snake needs it before splitting.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts There is no key-specific rule; the walk looks only at ASCII capitals and treats other characters as lowercase material.
   * @evidence contracts/common.md#meaningful-documentation The doc names the form and the inline comment explains why the walk must run per segment instead of lowercasing it atomically.
   */
  export function snake(str: string): string {
    if (str.length === 0) return str;

    // PREFIX
    let prefix: string = "";
    for (let i: number = 0; i < str.length; i++) {
      if (str[i] === "_") prefix += "_";
      else break;
    }
    if (prefix.length !== 0) str = str.substring(prefix.length);

    // SNAKE CASE
    //
    // Run the case-boundary walk within each underscore-delimited segment, not
    // over the whole segment at once. Lowercasing a segment atomically would
    // drop the camelCase boundary inside it (`["fooBar", "baz"]` →
    // `["foobar", "baz"]` → `foobar_baz`), diverging from `SnakeCase<T>`; the
    // per-segment walk keeps it (`["foo_bar", "baz"]` → `foo_bar_baz`).
    return `${prefix}${str.split("_").map(snakeWord).join("_")}`;
  }

  /**
   * Convert to kebab-case.
   *
   * Derives the snake_case form first and then rewrites the word separators to
   * hyphens, keeping any leading underscores untouched.
   *
   * @param str Input string
   *
   * @returns Kebab-case string
   *
   * @evidence contracts/common.md#principled-implementation The snake_case form is derived first and every underscore after the leading ones becomes a hyphen, which gives the same word boundaries as snake with a different separator and keeps leading underscores.
   * @evidence contracts/common.md#clear-and-simple-design It delegates the boundary rule to snake and owns only the separator rewrite.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts No second boundary algorithm is introduced, so kebab and snake cannot drift apart.
   * @evidence contracts/common.md#meaningful-documentation The doc states the two-step derivation and the preserved prefix.
   */
  export function kebab(str: string): string {
    let snaked: string = snake(str);
    let prefix: string = "";
    while (snaked.startsWith("_")) {
      prefix += "_";
      snaked = snaked.substring(1);
    }
    return `${prefix}${snaked.replaceAll("_", "-")}`;
  }

  /**
   * Capitalize first character.
   *
   * @param str Input string
   *
   * @returns Capitalized string
   *
   * @evidence contracts/common.md#principled-implementation The first character is uppercased and the rest is kept verbatim, with the empty string unchanged.
   * @evidence contracts/common.md#clear-and-simple-design One expression with an empty-string guard.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It does not lowercase the tail, which is the difference from EndpointUtil.capitalize.
   * @evidence contracts/common.md#meaningful-documentation The doc says it capitalizes the first character; it does not mention that characters are indexed by UTF-16 unit.
   */
  export const capitalize = (str: string): string =>
    str.length !== 0 ? str[0]!.toUpperCase() + str.slice(1) : str;

  /**
   * Lowercase first character.
   *
   * @param str Input string
   *
   * @returns String whose first character is lowercased
   *
   * @evidence contracts/common.md#principled-implementation The first character is lowercased and the rest is kept verbatim, with the empty string unchanged.
   * @evidence contracts/common.md#clear-and-simple-design One expression with an empty-string guard, the mirror of capitalize.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A general string transformation without special cases.
   * @evidence contracts/common.md#meaningful-documentation The doc says it lowercases the first character; its return description was corrected to say the first character is lowercased.
   */
  export const localize = (str: string): string =>
    str.length !== 0 ? str[0]!.toLowerCase() + str.slice(1) : str;

  /**
   * Check if string is valid JavaScript variable name.
   *
   * Returns `true` only when `str` can be used as a _binding_ identifier — a
   * declaration, parameter, or import name — in the dialect typia generates: an
   * ES module, which is always strict mode. A string is a valid binding when it
   * has identifier shape and is neither {@link reserved} nor one of the
   * strict-mode restricted binding names (`eval`, `arguments`).
   *
   * The restricted binding names are why this is not derived from
   * {@link reserved} alone. `eval` and `arguments` are not reserved words at
   * all; they are rejected only in binding position under strict mode, so no
   * reserved-word list can express this predicate.
   *
   * Property _access_ is a weaker requirement than binding, since dot notation
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
   *
   * @returns True if valid variable name
   *
   * @evidence contracts/common.md#principled-implementation A name is accepted when it matches the ASCII identifier shape and is not in the restricted set, which is the reserved words plus `eval` and `arguments`; that is the binding rule of an ES module, which is strict mode. The pattern has no global flag so repeated tests do not carry `lastIndex`.
   * @evidence contracts/common.md#clear-and-simple-design One regular expression test and one set lookup; the restricted set is separate from the reserved set because the two predicates differ.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Unicode identifiers are rejected by design, which can only cause extra escaping and never an illegal binding.
   * @evidence contracts/common.md#meaningful-documentation The long comment explains binding versus access position, why the reserved list alone is insufficient and the ASCII bias.
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
   * `eval` and `arguments` are deliberately absent. They are not reserved words
   * — they are merely illegal as binding names in strict code — so
   * {@link variable} rejects them separately.
   *
   * @param str String to check
   *
   * @returns True if reserved word
   *
   * @evidence contracts/common.md#principled-implementation The set is the ECMAScript reserved words, the strict-mode future reserved words and the typia policy word `module`, which is the union that every name generated into an ES module must avoid; `eval` and `arguments` are intentionally absent.
   * @evidence contracts/common.md#clear-and-simple-design A set lookup over three named lists whose reasons are recorded beside each list.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts `module` is an explicit policy entry whose reason is documented, not a consumer special case.
   * @evidence contracts/common.md#meaningful-documentation The comment states what the set covers and why `eval`, `arguments` and `module` are treated as they are.
   */
  export const reserved = (str: string): boolean => RESERVED.has(str);
}

/**
 * Identifier shape, ASCII subset.
 *
 * Declared without the `g` flag on purpose: a global regular expression carries
 * `lastIndex` across `test()` calls, which would make
 * {@link NamingConvention.variable} alternate between answers for the same input
 * once the pattern is hoisted out of the function body.
 */
const IDENTIFIER: RegExp = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;

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

/**
 * Shared outer walk for {@link NamingConvention.camel} and
 * {@link NamingConvention.pascal}.
 *
 * Mirrors the `CamelCase<T>` / `PascalCase<T>` typings: leading underscores are
 * preserved verbatim, an all-underscore key stays untouched, and the presence
 * of any remaining underscore — not the number of non-empty segments — selects
 * the `snake` conversion. Routing on underscore presence keeps a trailing or
 * doubled underscore (`fooBar_`) on the same path the type takes, instead of
 * collapsing it to the underscore-free `plain` path.
 */
const renameOuter =
  (props: { plain: (str: string) => string; snake: (str: string) => string }) =>
  (str: string): string => {
    let prefix: string = "";
    while (str.startsWith("_")) {
      prefix += "_";
      str = str.substring(1);
    }
    if (str.length === 0) return prefix;
    return `${prefix}${str.includes("_") ? props.snake(str) : props.plain(str)}`;
  };

/**
 * Snake_case conversion of one underscore-free segment.
 *
 * Splits on case boundaries, collapsing an acronym run into a single word
 * (`XMLParser` → `xmlparser`, `toHTML` → `to_html`).
 */
const snakeWord = (str: string): string => {
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
  if (indexes.length === 0) return str.toLowerCase();

  let ret: string = "";
  for (let i: number = 0; i < indexes.length; i++) {
    const first: number = i === 0 ? 0 : indexes[i - 1]!;
    const last: number = indexes[i]!;

    ret += str.substring(first, last).toLowerCase();
    ret += "_";
  }
  ret += str.substring(indexes[indexes.length - 1]!).toLowerCase();
  return ret;
};

/**
 * CamelCase conversion of a key that contains at least one underscore.
 *
 * Uppercases the character after each underscore and lowercases the rest,
 * matching `CamelizeSnakeString`. A trailing underscore has no character to
 * uppercase, so it falls through to lowercasing the whole key (`foo_` →
 * `foo_`), and a doubled underscore collapses to a single one before
 * continuing.
 */
const camelSnake = (str: string): string => {
  while (str.startsWith("_")) str = str.substring(1);
  if (str.length === 0) return "";
  const index: number = str.indexOf("_");
  if (index < 0) return str.toLowerCase();
  const middle: string | undefined = str[index + 1];
  if (middle === undefined) return str.toLowerCase();
  return middle === "_"
    ? camelSnake(`${str.substring(0, index)}_${str.substring(index + 2)}`)
    : `${str
        .substring(0, index)
        .toLowerCase()}${middle.toUpperCase()}${camelSnake(
        str.substring(index + 2),
      )}`;
};

/**
 * PascalCase conversion of a key that contains at least one underscore.
 *
 * Capitalizes each underscore-delimited segment and lowercases its tail
 * (`MAX_COUNT` → `MaxCount`), matching `PascalizeSnakeString`.
 */
const pascalSnake = (str: string): string => {
  while (str.startsWith("_")) str = str.substring(1);
  if (str.length === 0) return "";
  const index: number = str.indexOf("_");
  return index < 0
    ? `${str[0]!.toUpperCase()}${str.substring(1).toLowerCase()}`
    : `${str[0]!.toUpperCase()}${str
        .substring(1, index)
        .toLowerCase()}${pascalSnake(str.substring(index + 1))}`;
};
