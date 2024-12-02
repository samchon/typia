import { IReadableURLSearchParams } from "../IReadableURLSearchParams";

export const _httpQueryParseURLSearchParams = (
  input: string | IReadableURLSearchParams,
): IReadableURLSearchParams => {
  if (typeof input === "string") {
    const index: number = input.indexOf("?");
    input = index === -1 ? "" : input.substring(index + 1);
    return new URLSearchParams(input);
  }
  return input;
};
