import { NamingConvention } from "../NamingConvention";
import { OpenApiComponentName } from "./OpenApiComponentName";

export namespace EndpointUtil {
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
   * accessors and names derived from a path are always legal (#2443), while the
   * letters of any script stay, as they did before.
   */
  export const normalize = (str: string): string => {
    str = str.trim().replace(NON_IDENTIFIER, "_");
    if (str.length === 0) return str;
    else if (NamingConvention.reserved(str)) return `_${str}`;
    else if (IDENTIFIER_START.test(str) === false) str = `_${str}`;
    return str;
  };

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
  const IDENTIFIER_START: RegExp = new RegExp("^[\\p{ID_Start}$_]", "u");
}
