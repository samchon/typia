import { NamingConvention } from "../NamingConvention";

export namespace EndpointUtil {
  export const capitalize = (str: string): string =>
    str.length !== 0 ? str[0]!.toUpperCase() + str.slice(1).toLowerCase() : str;

  /**
   * Derive a component name from a path.
   *
   * The result is a Components Object key, whose grammar is
   * `^[a-zA-Z0-9.\-_]+$` (#2443). {@link normalize} leaves `$` in place, because
   * it is legal in an identifier, so it is mapped here as well.
   */
  export const pascal = (path: string): string =>
    splitWithNormalization(path)
      .map(NamingConvention.pascal)
      .join("")
      .replaceAll("$", "_");

  /**
   * Split a path into its normalized literal segments.
   *
   * A segment that starts with a `{param}` expression is dropped before
   * normalization, which would otherwise turn its braces into `_`.
   */
  export const splitWithNormalization = (path: string): string[] =>
    path
      .split("/")
      .map((str) => str.trim())
      .filter((str) => str[0] !== "{")
      .map(normalize)
      .filter((str) => !!str.length);

  export const reJoinWithDecimalParameters = (path: string) => {
    path = path.replace(/\{([^{}]+)\}/g, ":$1");
    return `${path.startsWith("/") ? "" : "/"}${path}`;
  };

  /**
   * Normalize one path segment into an identifier.
   *
   * A path segment may hold any RFC 3986 `pchar`: Google AIP custom methods
   * write `/items:batchGet`, and `@`, `~`, `+`, `*`, and percent-encodings are
   * all legal. Every character an identifier cannot hold becomes `_`, so the
   * accessors and names derived from a path are always legal (#2443).
   */
  export const normalize = (str: string): string => {
    str = str.trim().replace(/[^a-zA-Z0-9_$]/g, "_");
    if (str.length === 0) return str;
    else if (NamingConvention.reserved(str)) return `_${str}`;
    else if (str.length !== 0 && "0" <= str[0]! && str[0]! <= "9")
      str = `_${str}`;
    return str;
  };

  export const escapeDuplicate =
    (keep: string[]) =>
    (change: string): string =>
      keep.includes(change) ? escapeDuplicate(keep)(`_${change}`) : change;
}
