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
      const $QueryReader =
        require("typia/lib/functional/$QueryReader").$QueryReader;
      input = $QueryReader.params(input) as URLSearchParams;
      const output = {
        boolean: $QueryReader.boolean(input.get("boolean")),
        bigint: $QueryReader.bigint(input.get("bigint")),
        number: $QueryReader.number(input.get("number")),
        string: $QueryReader.string(input.get("string")),
        template: $QueryReader.string(input.get("template")),
      };
      return output as any;
    };
    const output = query(input);
    if (!is(output)) return null;
    return output;
  })(input),
);
