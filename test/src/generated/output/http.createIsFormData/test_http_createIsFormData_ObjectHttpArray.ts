import typia from "typia";

import { _test_http_isFormData } from "../../../internal/_test_http_isFormData";
import { ObjectHttpArray } from "../../../structures/ObjectHttpArray";

export const test_http_createIsFormData_ObjectHttpArray = _test_http_isFormData(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)(
  (input: FormData): typia.Resolved<ObjectHttpArray> | null => {
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
    const decode = (input: FormData): typia.Resolved<ObjectHttpArray> => {
      const $boolean = (typia.http.createIsFormData as any).boolean;
      const $bigint = (typia.http.createIsFormData as any).bigint;
      const $number = (typia.http.createIsFormData as any).number;
      const $string = (typia.http.createIsFormData as any).string;
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
