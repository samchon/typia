/**
 * Shared outer walk for the `camel`/`pascal` notations.
 *
 * Mirrors the `CamelCase<T>` / `PascalCase<T>` typings: leading underscores are
 * preserved verbatim, an all-underscore key stays untouched, and the presence
 * of any remaining underscore — not the number of non-empty segments — selects
 * the `snake` conversion. Routing on underscore presence keeps a trailing or
 * doubled underscore (`fooBar_`) on the same path the type takes, instead of
 * collapsing it to the underscore-free `plain` path.
 */
export const __notationRename =
  (props: {
    plain: (str: string) => string;
    snake: (str: string) => string;
  }) =>
  (str: string): string => {
    let prefix: string = "";
    while (str.startsWith("_")) {
      prefix += "_";
      str = str.substring(1);
    }
    if (str.length === 0) return prefix;
    return `${prefix}${str.includes("_") ? props.snake(str) : props.plain(str)}`;
  };
