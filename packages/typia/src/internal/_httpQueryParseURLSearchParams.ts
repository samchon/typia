import { IReadableURLSearchParams } from "@typia/interface";

export const _httpQueryParseURLSearchParams = (
  input: string | IReadableURLSearchParams,
): IReadableURLSearchParams => {
  if (typeof input === "string") {
    if (input.startsWith("?")) input = input.substring(1);
    else {
      const index: number = input.indexOf("?");
      if (index !== -1 && isUrlPrefix(input.substring(0, index)))
        input = input.substring(index + 1);
      else if (index === -1 && isUrlPrefix(input)) input = "";
    }
    const fragment: number = input.indexOf("#");
    if (fragment !== -1) input = input.substring(0, fragment);
    return new URLSearchParams(input);
  }
  return input;
};

const isUrlPrefix = (prefix: string): boolean =>
  /^[a-z][a-z\d+.-]*:/i.test(prefix) || prefix.includes("/");
