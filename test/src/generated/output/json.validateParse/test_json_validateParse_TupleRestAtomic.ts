import typia from "typia";

import { _test_json_validateParse } from "../../../internal/_test_json_validateParse";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_json_validateParse_TupleRestAtomic = _test_json_validateParse(
  "TupleRestAtomic",
)<TupleRestAtomic>(TupleRestAtomic)((input) =>
  ((input: string): typia.IValidation<typia.Primitive<TupleRestAtomic>> => {
    const validate = (input: any): typia.IValidation<TupleRestAtomic> => {
      const errors = [] as any[];
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
      if (false === __is(input)) {
        const $report = require("typia/lib/functional/$report").$report(errors);
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is TupleRestAtomic => {
          return (
            ((Array.isArray(input) ||
              $report(true, {
                path: _path + "",
                expected: "TupleRestAtomic",
                value: input,
              })) &&
              [
                "boolean" === typeof input[0] ||
                  $report(true, {
                    path: _path + "[0]",
                    expected: "boolean",
                    value: input[0],
                  }),
                ("number" === typeof input[1] && Number.isFinite(input[1])) ||
                  $report(true, {
                    path: _path + "[1]",
                    expected: "number",
                    value: input[1],
                  }),
              ].every((flag: boolean) => flag) &&
              (((Array.isArray(input.slice(2)) ||
                $report(true, {
                  path: _path + "",
                  expected: "...string",
                  value: input.slice(2),
                })) &&
                input
                  .slice(2)
                  .map(
                    (elem: any, _index1: number) =>
                      "string" === typeof elem ||
                      $report(true, {
                        path: _path + "[" + (2 + _index1) + "]",
                        expected: "string",
                        value: elem,
                      }),
                  )
                  .every((flag: boolean) => flag)) ||
                $report(true, {
                  path: _path + "",
                  expected: "...string",
                  value: input.slice(2),
                }))) ||
            $report(true, {
              path: _path + "",
              expected: "TupleRestAtomic",
              value: input,
            })
          );
        })(input, "$input", true);
      }
      const success = 0 === errors.length;
      return {
        success,
        errors,
        data: success ? input : undefined,
      } as any;
    };
    const output = JSON.parse(input);
    return validate(output) as any;
  })(input),
);
