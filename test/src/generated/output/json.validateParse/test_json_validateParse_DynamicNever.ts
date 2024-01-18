import typia from "typia";

import { _test_json_validateParse } from "../../../internal/_test_json_validateParse";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_json_validateParse_DynamicNever = _test_json_validateParse(
  "DynamicNever",
)<DynamicNever>(DynamicNever)((input) =>
  ((input: string): typia.IValidation<typia.Primitive<DynamicNever>> => {
    const validate = (input: any): typia.IValidation<DynamicNever> => {
      const errors = [] as any[];
      const __is = (input: any): input is DynamicNever => {
        const $io0 = (input: any): boolean =>
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            if (true) return null !== value && undefined === value;
            return true;
          });
        return (
          "object" === typeof input &&
          null !== input &&
          false === Array.isArray(input) &&
          $io0(input)
        );
      };
      if (false === __is(input)) {
        const $report = require("typia/lib/functional/$report").$report(errors);
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is DynamicNever => {
          // @ts-ignore;
          declare const require: (lib: string) => any;
          const $join = require("typia/lib/functional/$join").$join;
          const $vo0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            [
              false === _exceptionable ||
                Object.keys(input)
                  .map((key: any) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (true)
                      return (
                        (null !== value ||
                          $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                          })) &&
                        (undefined === value ||
                          $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                          }))
                      );
                    return true;
                  })
                  .every((flag: boolean) => flag),
            ].every((flag: boolean) => flag);
          return (
            ((("object" === typeof input &&
              null !== input &&
              false === Array.isArray(input)) ||
              $report(true, {
                path: _path + "",
                expected: "DynamicNever",
                value: input,
              })) &&
              $vo0(input, _path + "", true)) ||
            $report(true, {
              path: _path + "",
              expected: "DynamicNever",
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
