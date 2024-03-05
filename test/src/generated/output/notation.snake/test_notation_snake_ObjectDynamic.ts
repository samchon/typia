import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_notation_validateSnake_ObjectDynamic =
  _test_notation_validateGeneral("ObjectDynamic")<ObjectDynamic>(ObjectDynamic)<
    typia.SnakeCase<ObjectDynamic>
  >({
    convert: (input) =>
      ((input: any): typia.IValidation<typia.SnakeCase<ObjectDynamic>> => {
        const validate = (input: any): typia.IValidation<ObjectDynamic> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectDynamic => {
            const $io0 = (input: any): boolean =>
              Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                return (
                  "string" === typeof value ||
                  ("number" === typeof value && Number.isFinite(value)) ||
                  "boolean" === typeof value
                );
              });
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input)
            );
          };
          if (false === __is(input)) {
            const $report = (typia.notations.validateSnake as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectDynamic => {
              const $join = (typia.notations.validateSnake as any).join;
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
                          "string" === typeof value ||
                          ("number" === typeof value &&
                            Number.isFinite(value)) ||
                          "boolean" === typeof value ||
                          $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "(boolean | number | string)",
                            value: value,
                          })
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
                    expected: "ObjectDynamic",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectDynamic",
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
        const general = (
          input: ObjectDynamic,
        ): typia.SnakeCase<ObjectDynamic> => {
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
      })(input),
    assert: (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): typia.SnakeCase<ObjectDynamic> => {
      const __is = (input: any): input is typia.SnakeCase<ObjectDynamic> => {
        const $io0 = (input: any): boolean =>
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            return (
              "string" === typeof value ||
              ("number" === typeof value && Number.isFinite(value)) ||
              "boolean" === typeof value
            );
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
        ): input is typia.SnakeCase<ObjectDynamic> => {
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
                "string" === typeof value ||
                ("number" === typeof value && Number.isFinite(value)) ||
                "boolean" === typeof value ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "(boolean | number | string)",
                    value: value,
                  },
                  errorFactory,
                )
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
                  expected: "ObjectDynamic",
                  value: input,
                },
                errorFactory,
              )) &&
              $ao0(input, _path + "", true)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectDynamic",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    },
  });
