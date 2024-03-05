import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_notation_createValidateSnake_DynamicNever =
  _test_notation_validateGeneral("DynamicNever")<DynamicNever>(DynamicNever)<
    typia.SnakeCase<DynamicNever>
  >({
    convert: (input: any): typia.IValidation<typia.SnakeCase<DynamicNever>> => {
      const validate = (input: any): typia.IValidation<DynamicNever> => {
        const errors = [] as any[];
        const __is = (input: any): input is DynamicNever => {
          const $io0 = (input: any): boolean =>
            Object.keys(input).every((key: any) => {
              const value = input[key];
              if (undefined === value) return true;
              return null !== value && undefined === value;
            });
          return (
            "object" === typeof input &&
            null !== input &&
            false === Array.isArray(input) &&
            $io0(input)
          );
        };
        if (false === __is(input)) {
          const $report = (typia.notations.createValidateSnake as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is DynamicNever => {
            const $join = (typia.notations.createValidateSnake as any).join;
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
      const general = (input: DynamicNever): typia.SnakeCase<DynamicNever> => {
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
      if (output.success) output.data = general(input);
      return output;
    },
    assert: (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): typia.SnakeCase<DynamicNever> => {
      const __is = (input: any): input is typia.SnakeCase<DynamicNever> => {
        const $io0 = (input: any): boolean =>
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            return null !== value && undefined === value;
          });
        return (
          "object" === typeof input &&
          null !== input &&
          false === Array.isArray(input) &&
          $io0(input)
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.SnakeCase<DynamicNever> => {
          const $guard = (typia.createAssert as any).guard;
          const $join = (typia.createAssert as any).join;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              const value = input[key];
              if (undefined === value) return true;
              return (
                (null !== value ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + $join(key),
                      expected: "undefined",
                      value: value,
                    },
                    errorFactory,
                  )) &&
                (undefined === value ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + $join(key),
                      expected: "undefined",
                      value: value,
                    },
                    errorFactory,
                  ))
              );
            });
          return (
            ((("object" === typeof input &&
              null !== input &&
              false === Array.isArray(input)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "DynamicNever",
                  value: input,
                },
                errorFactory,
              )) &&
              $ao0(input, _path + "", true)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "DynamicNever",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    },
  });
