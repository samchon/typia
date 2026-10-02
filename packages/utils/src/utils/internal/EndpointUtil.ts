import { NamingConvention } from "../NamingConvention";
import { OpenApiComponentName } from "./OpenApiComponentName";

/**
 * Name derivation helpers for HTTP endpoint paths.
 *
 * The functions turn an OpenAPI path into the literal segments, component names
 * and `:param` form that the migration and LLM composers use for accessors and
 * schema keys.
 *
 * @evidence contracts/common.md#principled-implementation Path-derived names split on slashes, drop parameter segments, replace characters outside the identifier-continue class and escape reserved or digit-leading segments. Accessor composition applies its additional naming guard, while component derivation applies the OpenAPI key escape; normalize alone does not guarantee a legal binding for every Unicode start or strict-mode restricted name.
 * @evidence contracts/common.md#clear-and-simple-design Small single-purpose functions compose in one namespace so the accessor composers and component naming share one normalization and no caller repeats it.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The character policy is a general class (`ID_Continue` plus `$` and the joiners) and not a list of known path spellings.
 * @evidence contracts/common.md#meaningful-documentation The namespace comment states the purpose and the main functions carry the reasons with issue references.
 */
export namespace EndpointUtil {
  /**
   * Capitalize the first character and lowercase the rest.
   *
   * Unlike `NamingConvention.capitalize`, the tail is lowercased as well, so
   * `userID` becomes `Userid`.
   *
   * @param str Input string
   *
   * @returns Capitalized string
   *
   * @evidence contracts/common.md#principled-implementation The first character is uppercased and the rest lowercased, which is the capitalization a PascalCase word needs once its source word has been split.
   * @evidence contracts/common.md#clear-and-simple-design One expression with an empty-string guard.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts General string transformation.
   * @evidence contracts/common.md#meaningful-documentation The doc states the lowercased tail that distinguishes it from NamingConvention.capitalize.
   */
  export const capitalize = (str: string): string =>
    str.length !== 0 ? str[0]!.toUpperCase() + str.slice(1).toLowerCase() : str;

  /**
   * Derive a component name from a path.
   *
   * The result is a Components Object key, whose grammar is
   * `^[a-zA-Z0-9.\-_]+$` (#2443). {@link normalize} keeps what an identifier may
   * hold, `$` and the letters of any script included: `$` becomes `_`, and any
   * other character outside the key grammar is encoded the way
   * `OpenApiComponentName` encodes one, so distinct letters stay distinct.
   *
   * @evidence contracts/common.md#principled-implementation The normalized path segments are each pascal-cased, joined, `$` becomes an underscore and the result is passed through the component-name escape, which makes the key satisfy the Components Object grammar while keeping distinct letters distinct.
   * @evidence contracts/common.md#clear-and-simple-design It composes the segment splitter, the shared pascal converter and the escape without repeating any of them.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The grammar is the OpenAPI key grammar, not an observed set of names.
   * @evidence contracts/common.md#meaningful-documentation The comment states the grammar, how `$` and other characters are handled and cites the issue.
   */
  export const pascal = (path: string): string =>
    OpenApiComponentName.escape(
      splitWithNormalization(path)
        .map(NamingConvention.pascal)
        .join("")
        .replaceAll("$", "_"),
    );

  /**
   * Split a path into its normalized literal segments.
   *
   * A segment that starts with a `{param}` expression is dropped before
   * normalization, which would otherwise turn its braces into `_`.
   *
   * @evidence contracts/common.md#principled-implementation Splitting on slashes, trimming, dropping segments that begin with a parameter expression and normalizing the rest leaves only literal path segments; dropping first prevents the braces from becoming underscores.
   * @evidence contracts/common.md#clear-and-simple-design One pipeline of map and filter steps.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It decides by segment shape and not by known paths.
   * @evidence contracts/common.md#meaningful-documentation The comment states why parameter segments are dropped before normalization.
   */
  export const splitWithNormalization = (path: string): string[] =>
    path
      .split("/")
      .map((str) => str.trim())
      .filter((str) => str[0] !== "{")
      .map(normalize)
      .filter((str) => !!str.length);

  /**
   * Rewrite `{param}` path expressions as `:param` and ensure a leading slash.
   *
   * @param path OpenAPI path template
   *
   * @returns Path in the `:param` form that always starts with `/`
   *
   * @evidence contracts/common.md#principled-implementation Every non-nested brace expression becomes a colon parameter and a missing leading slash is added, which converts an OpenAPI template to the colon form used by routers. Nested braces inside one parameter are not handled.
   * @evidence contracts/common.md#clear-and-simple-design One replacement and one prefix expression.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A general template rewrite.
   * @evidence contracts/common.md#meaningful-documentation The doc states the colon form and leading slash.
   */
  export const reJoinWithDecimalParameters = (path: string) => {
    path = path.replace(/\{([^{}]+)\}/g, ":$1");
    return `${path.startsWith("/") ? "" : "/"}${path}`;
  };

  /**
   * Normalize one path segment for accessor or component name derivation.
   *
   * A path segment may hold any RFC 3986 `pchar`: Google AIP custom methods
   * write `/items:batchGet`, and `@`, `~`, `+`, `*`, and percent-encodings are
   * all legal. Characters outside the identifier-continue class become `_`,
   * while letters of any script stay (#2443). Accessor and component callers
   * apply their own final naming guards; this function alone does not establish
   * a legal binding identifier for every Unicode start or restricted name.
   *
   * @evidence contracts/common.md#principled-implementation The allowed set is identifier-continue characters plus `$` and the joiners; all other characters become underscores. Reserved words and leading ASCII digits receive prefixes, and the empty result stays empty. Unicode starting characters and strict-mode restricted bindings are left to the accessor caller's additional guard, so this helper does not claim full binding validation.
   * @evidence contracts/common.md#clear-and-simple-design One function with three ordered conditions; the pattern is built from a string because the package targets a lower ECMAScript level than property escapes in literals.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The rule is a character class, with no list of known segments.
   * @evidence contracts/common.md#meaningful-documentation The comment explains the allowed characters, the AIP custom method example and the motivating issue.
   */
  export const normalize = (str: string): string => {
    str = str.trim().replace(NON_IDENTIFIER, "_");
    if (str.length === 0) return str;
    else if (NamingConvention.reserved(str)) return `_${str}`;
    else if ("0" <= str[0]! && str[0]! <= "9") str = `_${str}`;
    return str;
  };

  /**
   * Prefix a name with underscores until it is absent from the kept names.
   *
   * @param keep Names that are already taken
   *
   * @returns Function mapping a candidate name to one that is not in `keep`
   *
   * @evidence contracts/common.md#principled-implementation The returned function prefixes an underscore until the name is not in the kept list, which terminates because each step lengthens the name and the kept list is finite.
   * @evidence contracts/common.md#clear-and-simple-design A curried function so one kept list serves many candidates.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A general collision rule without special names.
   * @evidence contracts/common.md#meaningful-documentation The doc states the parameters and result.
   */
  export const escapeDuplicate =
    (keep: string[]) =>
    (change: string): string =>
      keep.includes(change) ? escapeDuplicate(keep)(`_${change}`) : change;

  // Built from strings: the package targets ES2016, below the ES2018 property
  // escapes a regular expression literal would need.
  const NON_IDENTIFIER: RegExp = new RegExp(
    "[^\\p{ID_Continue}$\\u200c\\u200d]",
    "gu",
  );
}
