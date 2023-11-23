import typia from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_json_createAssertStringify_TupleRestArray =
  _test_json_assertStringify("TupleRestArray")<TupleRestArray>(TupleRestArray)(
    (input: any): string => {
      const assert = (input: any): TupleRestArray => {
        const __is = (input: any): input is TupleRestArray => {
          return (
            Array.isArray(input) &&
            "boolean" === typeof input[0] &&
            "number" === typeof input[1] &&
            Number.isFinite(input[1]) &&
            Array.isArray(input.slice(2)) &&
            input
              .slice(2)
              .every(
                (elem: any) =>
                  Array.isArray(elem) &&
                  elem.every((elem: any) => "string" === typeof elem),
              )
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is TupleRestArray => {
            const $guard = (typia.json.createAssertStringify as any).guard;
            return (
              ((Array.isArray(input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "TupleRestArray",
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
                    expected: "...Array<string>",
                    value: input.slice(2),
                  })) &&
                  input.slice(2).every(
                    (elem: any, _index1: number) =>
                      ((Array.isArray(elem) ||
                        $guard(true, {
                          path: _path + "[" + (2 + _index1) + "]",
                          expected: "Array<string>",
                          value: elem,
                        })) &&
                        elem.every(
                          (elem: any, _index2: number) =>
                            "string" === typeof elem ||
                            $guard(true, {
                              path:
                                _path +
                                "[" +
                                (2 + _index1) +
                                "][" +
                                _index2 +
                                "]",
                              expected: "string",
                              value: elem,
                            }),
                        )) ||
                      $guard(true, {
                        path: _path + "[" + (2 + _index1) + "]",
                        expected: "Array<string>",
                        value: elem,
                      }),
                  )) ||
                  $guard(true, {
                    path: _path + "",
                    expected: "...Array<string>",
                    value: input.slice(2),
                  }))) ||
              $guard(true, {
                path: _path + "",
                expected: "TupleRestArray",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: TupleRestArray): string => {
        const $number = (typia.json.createAssertStringify as any).number;
        const $string = (typia.json.createAssertStringify as any).string;
        const $rest = (typia.json.createAssertStringify as any).rest;
        return `[${input[0]},${$number(input[1])}${$rest(
          `[${input
            .slice(2)
            .map(
              (elem: any) =>
                `[${elem.map((elem: any) => $string(elem)).join(",")}]`,
            )
            .join(",")}]`,
        )}]`;
      };
      return stringify(assert(input));
    },
  );
