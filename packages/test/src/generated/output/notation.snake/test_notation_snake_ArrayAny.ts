import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ArrayAny } from "../../../structures/ArrayAny";

export const test_notation_validateSnake_ArrayAny =
  _test_notation_validateGeneral("ArrayAny")<ArrayAny>(ArrayAny)<
    typia.SnakeCase<ArrayAny>
  >({
    convert: (input) =>
      ((input: any): typia.IValidation<typia.SnakeCase<ArrayAny>> => {
        const validate = (input: any): typia.IValidation<ArrayAny> => {
          const errors = [] as any[];
          const __is = (input: any): input is ArrayAny => {
            const $io0 = (input: any): boolean =>
              Array.isArray(input.anys) &&
              (undefined === input.undefindable1 ||
                Array.isArray(input.undefindable1)) &&
              (undefined === input.undefindable2 ||
                Array.isArray(input.undefindable2)) &&
              (null === input.nullables1 || Array.isArray(input.nullables1)) &&
              (null === input.nullables2 || Array.isArray(input.nullables2)) &&
              (null === input.both1 ||
                undefined === input.both1 ||
                Array.isArray(input.both1)) &&
              (null === input.both2 ||
                undefined === input.both2 ||
                Array.isArray(input.both2)) &&
              (null === input.both3 ||
                undefined === input.both3 ||
                Array.isArray(input.both3)) &&
              Array.isArray(input.union);
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input)) {
            const $report = (typia.notations.validateSnake as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ArrayAny => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  Array.isArray(input.anys) ||
                    $report(_exceptionable, {
                      path: _path + ".anys",
                      expected: "Array<any>",
                      value: input.anys,
                    }),
                  undefined === input.undefindable1 ||
                    Array.isArray(input.undefindable1) ||
                    $report(_exceptionable, {
                      path: _path + ".undefindable1",
                      expected: "(Array<any> | undefined)",
                      value: input.undefindable1,
                    }),
                  undefined === input.undefindable2 ||
                    Array.isArray(input.undefindable2) ||
                    $report(_exceptionable, {
                      path: _path + ".undefindable2",
                      expected: "(Array<any> | undefined)",
                      value: input.undefindable2,
                    }),
                  null === input.nullables1 ||
                    Array.isArray(input.nullables1) ||
                    $report(_exceptionable, {
                      path: _path + ".nullables1",
                      expected: "(Array<any> | null)",
                      value: input.nullables1,
                    }),
                  null === input.nullables2 ||
                    Array.isArray(input.nullables2) ||
                    $report(_exceptionable, {
                      path: _path + ".nullables2",
                      expected: "(Array<any> | null)",
                      value: input.nullables2,
                    }),
                  null === input.both1 ||
                    undefined === input.both1 ||
                    Array.isArray(input.both1) ||
                    $report(_exceptionable, {
                      path: _path + ".both1",
                      expected: "(Array<any> | null | undefined)",
                      value: input.both1,
                    }),
                  null === input.both2 ||
                    undefined === input.both2 ||
                    Array.isArray(input.both2) ||
                    $report(_exceptionable, {
                      path: _path + ".both2",
                      expected: "(Array<any> | null | undefined)",
                      value: input.both2,
                    }),
                  null === input.both3 ||
                    undefined === input.both3 ||
                    Array.isArray(input.both3) ||
                    $report(_exceptionable, {
                      path: _path + ".both3",
                      expected: "(Array<any> | null | undefined)",
                      value: input.both3,
                    }),
                  Array.isArray(input.union) ||
                    $report(_exceptionable, {
                      path: _path + ".union",
                      expected: "Array<any>",
                      value: input.union,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ArrayAny",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ArrayAny",
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
        const general = (input: ArrayAny): typia.SnakeCase<ArrayAny> => {
          const $any = (typia.notations.validateSnake as any).any;
          const $co0 = (input: any): any => ({
            anys: $any(input.anys),
            undefindable1: $any(input.undefindable1),
            undefindable2: $any(input.undefindable2),
            nullables1: $any(input.nullables1),
            nullables2: $any(input.nullables2),
            both1: $any(input.both1),
            both2: $any(input.both2),
            both3: $any(input.both3),
            union: $any(input.union),
          });
          return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = general(input);
        return output;
      })(input),
    assert: (input: any): typia.SnakeCase<ArrayAny> => {
      const __is = (input: any): input is typia.SnakeCase<ArrayAny> => {
        const $io0 = (input: any): boolean =>
          Array.isArray(input.anys) &&
          (undefined === input.undefindable1 ||
            Array.isArray(input.undefindable1)) &&
          (undefined === input.undefindable2 ||
            Array.isArray(input.undefindable2)) &&
          (null === input.nullables1 || Array.isArray(input.nullables1)) &&
          (null === input.nullables2 || Array.isArray(input.nullables2)) &&
          (null === input.both1 ||
            undefined === input.both1 ||
            Array.isArray(input.both1)) &&
          (null === input.both2 ||
            undefined === input.both2 ||
            Array.isArray(input.both2)) &&
          (null === input.both3 ||
            undefined === input.both3 ||
            Array.isArray(input.both3)) &&
          Array.isArray(input.union);
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.SnakeCase<ArrayAny> => {
          const $guard = (typia.createAssert as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (Array.isArray(input.anys) ||
              $guard(_exceptionable, {
                path: _path + ".anys",
                expected: "Array<any>",
                value: input.anys,
              })) &&
            (undefined === input.undefindable1 ||
              Array.isArray(input.undefindable1) ||
              $guard(_exceptionable, {
                path: _path + ".undefindable1",
                expected: "(Array<any> | undefined)",
                value: input.undefindable1,
              })) &&
            (undefined === input.undefindable2 ||
              Array.isArray(input.undefindable2) ||
              $guard(_exceptionable, {
                path: _path + ".undefindable2",
                expected: "(Array<any> | undefined)",
                value: input.undefindable2,
              })) &&
            (null === input.nullables1 ||
              Array.isArray(input.nullables1) ||
              $guard(_exceptionable, {
                path: _path + ".nullables1",
                expected: "(Array<any> | null)",
                value: input.nullables1,
              })) &&
            (null === input.nullables2 ||
              Array.isArray(input.nullables2) ||
              $guard(_exceptionable, {
                path: _path + ".nullables2",
                expected: "(Array<any> | null)",
                value: input.nullables2,
              })) &&
            (null === input.both1 ||
              undefined === input.both1 ||
              Array.isArray(input.both1) ||
              $guard(_exceptionable, {
                path: _path + ".both1",
                expected: "(Array<any> | null | undefined)",
                value: input.both1,
              })) &&
            (null === input.both2 ||
              undefined === input.both2 ||
              Array.isArray(input.both2) ||
              $guard(_exceptionable, {
                path: _path + ".both2",
                expected: "(Array<any> | null | undefined)",
                value: input.both2,
              })) &&
            (null === input.both3 ||
              undefined === input.both3 ||
              Array.isArray(input.both3) ||
              $guard(_exceptionable, {
                path: _path + ".both3",
                expected: "(Array<any> | null | undefined)",
                value: input.both3,
              })) &&
            (Array.isArray(input.union) ||
              $guard(_exceptionable, {
                path: _path + ".union",
                expected: "Array<any>",
                value: input.union,
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "ArrayAny",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "ArrayAny",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });
