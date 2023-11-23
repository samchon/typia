import typia from "typia";

import { _test_http_isQuery } from "../../../internal/_test_http_isQuery";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";

export const test_http_isQuery_ObjectHttpConstant = _test_http_isQuery(
  "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
  ((
    input: string | URLSearchParams,
  ): typia.Resolved<ObjectHttpConstant> | null => {
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
    const query = (
      input: string | URLSearchParams,
    ): typia.Resolved<ObjectHttpConstant> => {
      const $params = (typia.http.isQuery as any).params;
      const $boolean = (typia.http.isQuery as any).boolean;
      const $bigint = (typia.http.isQuery as any).bigint;
      const $number = (typia.http.isQuery as any).number;
      const $string = (typia.http.isQuery as any).string;
      input = $params(input) as URLSearchParams;
      const output = {
        boolean: $boolean(input.get("boolean")),
        bigint: $bigint(input.get("bigint")),
        number: $number(input.get("number")),
        string: $string(input.get("string")),
        template: $string(input.get("template")),
      };
      return output as any;
    };
    const output = query(input);
    if (!is(output)) return null;
    return output;
  })(input),
);
