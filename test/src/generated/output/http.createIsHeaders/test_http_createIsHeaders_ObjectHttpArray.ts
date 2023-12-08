import typia from "typia";

import { _test_http_isHeaders } from "../../../internal/_test_http_isHeaders";
import { ObjectHttpArray } from "../../../structures/ObjectHttpArray";

export const test_http_createIsHeaders_ObjectHttpArray = _test_http_isHeaders(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)(
  (
    input: Record<string, string | string[] | undefined>,
  ): typia.Resolved<ObjectHttpArray> | null => {
    const is = (input: any): input is ObjectHttpArray => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.booleans) &&
        input.booleans.every((elem: any) => "boolean" === typeof elem) &&
        Array.isArray(input.bigints) &&
        input.bigints.every((elem: any) => "bigint" === typeof elem) &&
        Array.isArray(input.numbers) &&
        input.numbers.every(
          (elem: any) => "number" === typeof elem && Number.isFinite(elem),
        ) &&
        Array.isArray(input.strings) &&
        input.strings.every((elem: any) => "string" === typeof elem) &&
        Array.isArray(input.templates) &&
        input.templates.every(
          (elem: any) =>
            "string" === typeof elem && RegExp(/^something_(.*)/).test(elem),
        );
      return "object" === typeof input && null !== input && $io0(input);
    };
    const headers = (
      input: Record<string, string | string[] | undefined>,
    ): typia.Resolved<ObjectHttpArray> => {
      const $boolean = (typia.http.createIsHeaders as any).boolean;
      const $bigint = (typia.http.createIsHeaders as any).bigint;
      const $number = (typia.http.createIsHeaders as any).number;
      const $string = (typia.http.createIsHeaders as any).string;
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
    };
    const output = headers(input);
    if (!is(output)) return null;
    return output;
  },
);
