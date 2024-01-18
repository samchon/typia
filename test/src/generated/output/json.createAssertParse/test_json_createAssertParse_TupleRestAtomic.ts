import typia from "typia";

import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_json_createAssertParse_TupleRestAtomic =
  _test_json_assertParse("TupleRestAtomic")<TupleRestAtomic>(TupleRestAtomic)(
    (input: string): typia.Primitive<TupleRestAtomic> => {
      const assert = (input: any): TupleRestAtomic => {
        const __is = (input: any): input is TupleRestAtomic => {
          return (
            Array.isArray(input) &&
            "boolean" === typeof input[0] &&
            "number" === typeof input[1] &&
            Number.isFinite(input[1]) &&
            Array.isArray(input.slice(2)) &&
            input.slice(2).every((elem: any) => "string" === typeof elem)
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is TupleRestAtomic => {
            // @ts-ignore;
            declare const require: (lib: string) => any;
            const $guard = require("typia/lib/functional/$guard").$guard(
              "typia.json.createAssertParse",
            );
            return (
              ((Array.isArray(input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "TupleRestAtomic",
                  value: input,
                })) &&
                ("boolean" === typeof input[0] ||
                  $guard(true, {
                    path: _path + "[0]",
                    expected: "boolean",
                    value: input[0],
                  })) &&
                (("number" === typeof input[1] && Number.isFinite(input[1])) ||
                  $guard(true, {
                    path: _path + "[1]",
                    expected: "number",
                    value: input[1],
                  })) &&
                (((Array.isArray(input.slice(2)) ||
                  $guard(true, {
                    path: _path + "",
                    expected: "...string",
                    value: input.slice(2),
                  })) &&
                  input.slice(2).every(
                    (elem: any, _index1: number) =>
                      "string" === typeof elem ||
                      $guard(true, {
                        path: _path + "[" + (2 + _index1) + "]",
                        expected: "string",
                        value: elem,
                      }),
                  )) ||
                  $guard(true, {
                    path: _path + "",
                    expected: "...string",
                    value: input.slice(2),
                  }))) ||
              $guard(true, {
                path: _path + "",
                expected: "TupleRestAtomic",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      input = JSON.parse(input);
      return assert(input) as any;
    },
  );
