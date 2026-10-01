import { IReadableURLSearchParams } from "@typia/interface";

/**
 * Parse a query input into URLSearchParams.
 *
 * A string may be a bare query, a query with a leading `?`, or a URL; a prefix
 * before the first `?` is dropped when it looks like a URL prefix (a scheme, a
 * slash or dot path, or text without `=` or `&`), and a fragment is removed
 * from a URL. An object that already reads like URLSearchParams is returned as
 * it is.
 *
 * @evidence contracts/common.md#principled-implementation A string input is reduced to its query: a leading `?` is dropped, text before a `?` is dropped when it looks like a URL prefix (a scheme, a leading slash or dot path, or text without `=` or `&`), and a fragment is removed for URL inputs; an object that already reads like URLSearchParams is returned as is. The URL-prefix test is a heuristic, so a bare query string whose first key contains no `=` or `&` is read as a prefix.
 * @evidence contracts/common.md#clear-and-simple-design One function and two private prefix predicates.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The heuristic is stated and has a defined boundary instead of a list of known URLs.
 * @evidence contracts/common.md#meaningful-documentation The doc states the accepted inputs and the heuristic.
 */
export const _httpQueryParseURLSearchParams = (
  input: string | IReadableURLSearchParams,
): IReadableURLSearchParams => {
  if (typeof input === "string") {
    let url: boolean = false;
    if (input.startsWith("?")) {
      input = input.substring(1);
      url = true;
    } else {
      const index: number = input.indexOf("?");
      if (index !== -1 && isUrlPrefix(input.substring(0, index))) {
        input = input.substring(index + 1);
        url = true;
      } else if (index === -1 && isExplicitUrlPrefix(input)) {
        input = "";
        url = true;
      }
    }
    if (url) {
      const fragment: number = input.indexOf("#");
      if (fragment !== -1) input = input.substring(0, fragment);
    }
    return new URLSearchParams(input);
  }
  return input;
};

const isUrlPrefix = (prefix: string): boolean =>
  isExplicitUrlPrefix(prefix) || (prefix.length !== 0 && !/[=&]/.test(prefix));

const isExplicitUrlPrefix = (prefix: string): boolean =>
  /^[a-z][a-z\d+.-]*:/i.test(prefix) || /^(?:\/\/|\/|\.{1,2}\/)/.test(prefix);
