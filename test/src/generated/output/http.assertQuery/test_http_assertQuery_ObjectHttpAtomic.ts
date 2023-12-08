import typia from "typia";

import { _test_http_assertQuery } from "../../../internal/_test_http_assertQuery";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_http_assertQuery_ObjectHttpAtomic = _test_http_assertQuery(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)((input) =>
  ((input: string | URLSearchParams): typia.Resolved<ObjectHttpAtomic> => {
    const decode = (
      input: string | URLSearchParams,
    ): typia.Resolved<ObjectHttpAtomic> => {
      const $params = (typia.http.assertQuery as any).params;
      const $boolean = (typia.http.assertQuery as any).boolean;
      const $bigint = (typia.http.assertQuery as any).bigint;
      const $number = (typia.http.assertQuery as any).number;
      const $string = (typia.http.assertQuery as any).string;
      input = $params(input) as URLSearchParams;
      const output = {
        boolean: $boolean(input.get("boolean")),
        bigint: $bigint(input.get("bigint")),
        number: $number(input.get("number")),
        string: $string(input.get("string")),
      };
      return output as any;
    };
    const assert = (input: any): ObjectHttpAtomic => {
      const __is = (input: any): input is ObjectHttpAtomic => {
        return (
          "object" === typeof input &&
          null !== input &&
          "boolean" === typeof (input as any).boolean &&
          "bigint" === typeof (input as any).bigint &&
          "number" === typeof (input as any).number &&
          Number.isFinite((input as any).number) &&
          "string" === typeof (input as any).string
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ObjectHttpAtomic => {
          const $guard = (typia.http.assertQuery as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("boolean" === typeof input.boolean ||
              $guard(_exceptionable, {
                path: _path + ".boolean",
                expected: "boolean",
                value: input.boolean,
              })) &&
            ("bigint" === typeof input.bigint ||
              $guard(_exceptionable, {
                path: _path + ".bigint",
                expected: "bigint",
                value: input.bigint,
              })) &&
            (("number" === typeof input.number &&
              Number.isFinite(input.number)) ||
              $guard(_exceptionable, {
                path: _path + ".number",
                expected: "number",
                value: input.number,
              })) &&
            ("string" === typeof input.string ||
              $guard(_exceptionable, {
                path: _path + ".string",
                expected: "string",
                value: input.string,
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectHttpAtomic",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectHttpAtomic",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const output = decode(input);
    return assert(output) as any;
  })(input),
);
