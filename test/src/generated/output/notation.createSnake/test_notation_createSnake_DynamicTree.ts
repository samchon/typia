import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_notation_createValidateSnake_DynamicTree =
  _test_notation_validateGeneral("DynamicTree")<DynamicTree>(DynamicTree)<
    typia.SnakeCase<DynamicTree>
  >({
    convert: (input: any): typia.IValidation<typia.SnakeCase<DynamicTree>> => {
      const validate = (input: any): typia.IValidation<DynamicTree> => {
        const errors = [] as any[];
        const __is = (input: any): input is DynamicTree => {
          const $io0 = (input: any): boolean =>
            "string" === typeof input.id &&
            "number" === typeof input.sequence &&
            Number.isFinite(input.sequence) &&
            "object" === typeof input.children &&
            null !== input.children &&
            false === Array.isArray(input.children) &&
            $io1(input.children);
          const $io1 = (input: any): boolean =>
            Object.keys(input).every((key: any) => {
              const value = input[key];
              if (undefined === value) return true;
              return "object" === typeof value && null !== value && $io0(value);
            });
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input)) {
          const $report = (typia.notations.createValidateSnake as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is DynamicTree => {
            const $join = (typia.notations.createValidateSnake as any).join;
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "string" === typeof input.id ||
                  $report(_exceptionable, {
                    path: _path + ".id",
                    expected: "string",
                    value: input.id,
                  }),
                ("number" === typeof input.sequence &&
                  Number.isFinite(input.sequence)) ||
                  $report(_exceptionable, {
                    path: _path + ".sequence",
                    expected: "number",
                    value: input.sequence,
                  }),
                ((("object" === typeof input.children &&
                  null !== input.children &&
                  false === Array.isArray(input.children)) ||
                  $report(_exceptionable, {
                    path: _path + ".children",
                    expected: "Record<string, DynamicTree>",
                    value: input.children,
                  })) &&
                  $vo1(
                    input.children,
                    _path + ".children",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".children",
                    expected: "Record<string, DynamicTree>",
                    value: input.children,
                  }),
              ].every((flag: boolean) => flag);
            const $vo1 = (
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
                        ((("object" === typeof value && null !== value) ||
                          $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "DynamicTree",
                            value: value,
                          })) &&
                          $vo0(
                            value,
                            _path + $join(key),
                            true && _exceptionable,
                          )) ||
                        $report(_exceptionable, {
                          path: _path + $join(key),
                          expected: "DynamicTree",
                          value: value,
                        })
                      );
                    })
                    .every((flag: boolean) => flag),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "DynamicTree",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "DynamicTree",
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
      const general = (input: DynamicTree): typia.SnakeCase<DynamicTree> => {
        const $io0 = (input: any): boolean =>
          "string" === typeof input.id &&
          "number" === typeof input.sequence &&
          "object" === typeof input.children &&
          null !== input.children &&
          false === Array.isArray(input.children) &&
          $io1(input.children);
        const $io1 = (input: any): boolean =>
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            return "object" === typeof value && null !== value && $io0(value);
          });
        const $co0 = (input: any): any => ({
          id: input.id as any,
          sequence: input.sequence as any,
          children:
            "object" === typeof input.children && null !== input.children
              ? $co1(input.children)
              : (input.children as any),
        });
        const $co1 = (input: any): any => {
          const output = {} as any;
          for (const [key, value] of Object.entries(input)) {
            if (RegExp(/(.*)/).test(key)) {
              output[key] =
                "object" === typeof value && null !== value
                  ? $co0(value)
                  : (value as any);
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
    assert: (input: any): typia.SnakeCase<DynamicTree> => {
      const __is = (input: any): input is typia.SnakeCase<DynamicTree> => {
        const $io0 = (input: any): boolean =>
          "string" === typeof input.id &&
          "number" === typeof input.sequence &&
          Number.isFinite(input.sequence) &&
          "object" === typeof input.children &&
          null !== input.children &&
          false === Array.isArray(input.children) &&
          $io1(input.children);
        const $io1 = (input: any): boolean =>
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            return "object" === typeof value && null !== value && $io0(value);
          });
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.SnakeCase<DynamicTree> => {
          const $guard = (typia.createAssert as any).guard;
          const $join = (typia.createAssert as any).join;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("string" === typeof input.id ||
              $guard(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id,
              })) &&
            (("number" === typeof input.sequence &&
              Number.isFinite(input.sequence)) ||
              $guard(_exceptionable, {
                path: _path + ".sequence",
                expected: "number",
                value: input.sequence,
              })) &&
            (((("object" === typeof input.children &&
              null !== input.children &&
              false === Array.isArray(input.children)) ||
              $guard(_exceptionable, {
                path: _path + ".children",
                expected: "Record<string, DynamicTree>",
                value: input.children,
              })) &&
              $ao1(
                input.children,
                _path + ".children",
                true && _exceptionable,
              )) ||
              $guard(_exceptionable, {
                path: _path + ".children",
                expected: "Record<string, DynamicTree>",
                value: input.children,
              }));
          const $ao1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              const value = input[key];
              if (undefined === value) return true;
              return (
                ((("object" === typeof value && null !== value) ||
                  $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "DynamicTree",
                    value: value,
                  })) &&
                  $ao0(value, _path + $join(key), true && _exceptionable)) ||
                $guard(_exceptionable, {
                  path: _path + $join(key),
                  expected: "DynamicTree",
                  value: value,
                })
              );
            });
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "DynamicTree",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "DynamicTree",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });
