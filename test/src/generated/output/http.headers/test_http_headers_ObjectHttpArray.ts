import typia from "typia";
import { _test_http_headers } from "../../../internal/_test_http_headers";
import { ObjectHttpArray } from "../../../structures/ObjectHttpArray";
export const test_http_headers_ObjectHttpArray = _test_http_headers(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)((input) =>
  ((
    input: Record<string, string | string[] | undefined>,
  ): import("typia").Resolved<ObjectHttpArray> => {
    const $boolean = (typia.http.headers as any).boolean;
    const $bigint = (typia.http.headers as any).bigint;
    const $number = (typia.http.headers as any).number;
    const $string = (typia.http.headers as any).string;
    const output = {
      booleans: Array.isArray(input.booleans)
        ? input.booleans.map($boolean)
        : input.booleans?.split(", ")?.map($boolean) ?? [],
      bigints: Array.isArray(input.bigints)
        ? input.bigints.map($bigint)
        : input.bigints?.split(", ")?.map($bigint) ?? [],
      numbers: Array.isArray(input.numbers)
        ? input.numbers.map($number)
        : input.numbers?.split(", ")?.map($number) ?? [],
      strings: Array.isArray(input.strings)
        ? input.strings.map($string)
        : input.strings?.split(", ")?.map($string) ?? [],
      templates: Array.isArray(input.templates)
        ? input.templates.map($string)
        : input.templates?.split(", ")?.map($string) ?? [],
    };
    return output as any;
  })(input),
);
