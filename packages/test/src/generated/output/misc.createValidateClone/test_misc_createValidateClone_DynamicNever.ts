import typia from "typia";

import { _test_misc_validateClone } from "../../../internal/_test_misc_validateClone";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_misc_createValidateClone_DynamicNever =
  _test_misc_validateClone("DynamicNever")<DynamicNever>(DynamicNever)(
    (input: any): typia.IValidation<typia.Resolved<DynamicNever>> => {
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
          const $report = (typia.misc.createValidateClone as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is DynamicNever => {
            const $join = (typia.misc.createValidateClone as any).join;
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
      const clone = (input: DynamicNever): typia.Resolved<DynamicNever> => {
        const $co0 = (input: any): any => {
          const output = {} as any;
          for (const [key, value] of Object.entries(input)) {
            if (RegExp(/(.*)/).test(key)) {
              output[key] = value as any;
              continue;
            }
          }
          return output;
        };
        return "object" === typeof input && null !== input
          ? $co0(input)
          : (input as any);
      };
      const output = validate(input) as any;
      if (output.success) output.data = clone(input);
      return output;
    },
  );
