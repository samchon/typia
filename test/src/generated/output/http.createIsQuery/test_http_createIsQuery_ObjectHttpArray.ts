import typia from "typia";

import { _test_http_isQuery } from "../../../internal/_test_http_isQuery";
import { ObjectHttpArray } from "../../../structures/ObjectHttpArray";

export const test_http_createIsQuery_ObjectHttpArray = _test_http_isQuery(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)(
  (
    input: string | URLSearchParams,
  ): import("typia").Resolved<ObjectHttpArray> | null => {
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
    const decode = (
      input: string | URLSearchParams,
    ): import("typia").Resolved<ObjectHttpArray> => {
      const $params = (typia.http.createIsQuery as any).params;
      const $boolean = (typia.http.createIsQuery as any).boolean;
      const $bigint = (typia.http.createIsQuery as any).bigint;
      const $number = (typia.http.createIsQuery as any).number;
      const $string = (typia.http.createIsQuery as any).string;
      input = $params(input) as URLSearchParams;
      const output = {
        booleans: input.getAll("booleans").map((elem: any) => $boolean(elem)),
        bigints: input.getAll("bigints").map((elem: any) => $bigint(elem)),
        numbers: input.getAll("numbers").map((elem: any) => $number(elem)),
        strings: input.getAll("strings").map((elem: any) => $string(elem)),
        templates: input.getAll("templates").map((elem: any) => $string(elem)),
      };
      return output as any;
    };
    const output = decode(input);
    if (!is(output)) return null;
    return output;
  },
);
