import { IReadableURLSearchParams } from "@typia/interface";

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
