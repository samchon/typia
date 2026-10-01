/**
 * Shared outer walk for the `camel`/`pascal` notations.
 *
 * Mirrors the `CamelCase<T>` / `PascalCase<T>` typings: leading underscores are
 * preserved verbatim, an all-underscore key stays untouched, and the presence
 * of any remaining underscore — not the number of non-empty segments — selects
 * the `snake` conversion. Routing on underscore presence keeps a trailing or
 * doubled underscore (`fooBar_`) on the same path the type takes, instead of
 * collapsing it to the underscore-free `plain` path.
 *
 * @evidence contracts/common.md#principled-implementation Leading underscores are kept, an all-underscore key is returned as is and the presence of an underscore in the rest selects the snake conversion, which keeps a trailing or doubled underscore on the path the CamelCase and PascalCase typings take.
 * @evidence contracts/common.md#clear-and-simple-design One curried function parameterized by the two strategies that the camel and pascal notations supply.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The routing rule is the typings' own.
 * @evidence contracts/common.md#meaningful-documentation The doc states the routing rule and why it uses underscore presence.
 */
export const __notationRename =
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
