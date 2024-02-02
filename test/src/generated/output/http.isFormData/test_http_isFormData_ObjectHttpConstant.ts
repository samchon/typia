import typia from "typia";

import { _test_http_isFormData } from "../../../internal/_test_http_isFormData";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";

export const test_http_isFormData_ObjectHttpConstant = _test_http_isFormData(
  "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
  ((input: FormData): typia.Resolved<ObjectHttpConstant> | null => {
    const is = (input: any): input is ObjectHttpConstant => {
      const $io0 = (input: any): boolean =>
        false === input.boolean &&
        (BigInt(1) === input.bigint || BigInt(99) === input.bigint) &&
        (2 === input.number || 98 === input.number) &&
        ("something" === input.string ||
          "three" === input.string ||
          "ninety-seven" === input.string) &&
        "string" === typeof input.template &&
        RegExp(/^abcd_(.*)/).test(input.template);
      return "object" === typeof input && null !== input && $io0(input);
    };
    const decode = (input: FormData): typia.Resolved<ObjectHttpConstant> => {
      const $boolean = (typia.http.isFormData as any).boolean;
      const $bigint = (typia.http.isFormData as any).bigint;
      const $number = (typia.http.isFormData as any).number;
      const $string = (typia.http.isFormData as any).string;
      const output = {
        boolean: $boolean(input.get("boolean")),
        bigint: $bigint(input.get("bigint")),
        number: $number(input.get("number")),
        string: $string(input.get("string")),
        template: $string(input.get("template")),
      };
      return output as any;
    };
    const output = decode(input);
    if (!is(output)) return null;
    return output;
  })(input),
);
