import typia from "typia";

import { _test_http_isHeaders } from "../../../internal/_test_http_isHeaders";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";

export const test_http_isHeaders_ObjectHttpConstant = _test_http_isHeaders(
  "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
  ((
    input: Record<string, string | string[] | undefined>,
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
    const headers = (
      input: Record<string, string | string[] | undefined>,
    ): typia.Resolved<ObjectHttpConstant> => {
      const $HeadersReader =
        require("typia/lib/functional/$HeadersReader").$HeadersReader;
      const output = {
        boolean: $HeadersReader.boolean(input.boolean),
        bigint: $HeadersReader.bigint(input.bigint),
        number: $HeadersReader.number(input.number),
        string: input.string,
        template: input.template,
      };
      return output as any;
    };
    const output = headers(input);
    if (!is(output)) return null;
    return output;
  })(input),
);
