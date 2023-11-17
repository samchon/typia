import typia from "../../../../src";
import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_notation_validateSnake_ConstantAtomicWrapper =
  _test_notation_validateGeneral(
    "ConstantAtomicWrapper",
  )<ConstantAtomicWrapper>(ConstantAtomicWrapper)<
    typia.SnakeCase<ConstantAtomicWrapper>
  >({
    convert: (input) =>
      ((
        input: any,
      ): typia.IValidation<typia.SnakeCase<ConstantAtomicWrapper>> => {
        const validate = (
          input: any,
        ): typia.IValidation<ConstantAtomicWrapper> => {
          const errors = [] as any[];
          const __is = (input: any): input is ConstantAtomicWrapper => {
            const $io0 = (input: any): boolean =>
              "boolean" === typeof input.value;
            const $io1 = (input: any): boolean =>
              "number" === typeof input.value && Number.isFinite(input.value);
            const $io2 = (input: any): boolean =>
              "string" === typeof input.value;
            return (
              Array.isArray(input) &&
              input.length === 3 &&
              "object" === typeof input[0] &&
              null !== input[0] &&
              $io0(input[0]) &&
              "object" === typeof input[1] &&
              null !== input[1] &&
              $io1(input[1]) &&
              "object" === typeof input[2] &&
              null !== input[2] &&
              $io2(input[2])
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
            ): input is ConstantAtomicWrapper => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "boolean" === typeof input.value ||
                    $report(_exceptionable, {
                      path: _path + ".value",
                      expected: "boolean",
                      value: input.value,
                    }),
                ].every((flag: boolean) => flag);
              const $vo1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ("number" === typeof input.value &&
                    Number.isFinite(input.value)) ||
                    $report(_exceptionable, {
                      path: _path + ".value",
                      expected: "number",
                      value: input.value,
                    }),
                ].every((flag: boolean) => flag);
              const $vo2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "string" === typeof input.value ||
                    $report(_exceptionable, {
                      path: _path + ".value",
                      expected: "string",
                      value: input.value,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((Array.isArray(input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ConstantAtomicWrapper",
                    value: input,
                  })) &&
                  (input.length === 3 ||
                    $report(true, {
                      path: _path + "",
                      expected:
                        "[ConstantAtomicWrapper.IPointer<boolean>, ConstantAtomicWrapper.IPointer<number>, ConstantAtomicWrapper.IPointer<string>]",
                      value: input,
                    })) &&
                  [
                    ((("object" === typeof input[0] && null !== input[0]) ||
                      $report(true, {
                        path: _path + "[0]",
                        expected: "ConstantAtomicWrapper.IPointer<boolean>",
                        value: input[0],
                      })) &&
                      $vo0(input[0], _path + "[0]", true)) ||
                      $report(true, {
                        path: _path + "[0]",
                        expected: "ConstantAtomicWrapper.IPointer<boolean>",
                        value: input[0],
                      }),
                    ((("object" === typeof input[1] && null !== input[1]) ||
                      $report(true, {
                        path: _path + "[1]",
                        expected: "ConstantAtomicWrapper.IPointer<number>",
                        value: input[1],
                      })) &&
                      $vo1(input[1], _path + "[1]", true)) ||
                      $report(true, {
                        path: _path + "[1]",
                        expected: "ConstantAtomicWrapper.IPointer<number>",
                        value: input[1],
                      }),
                    ((("object" === typeof input[2] && null !== input[2]) ||
                      $report(true, {
                        path: _path + "[2]",
                        expected: "ConstantAtomicWrapper.IPointer<string>",
                        value: input[2],
                      })) &&
                      $vo2(input[2], _path + "[2]", true)) ||
                      $report(true, {
                        path: _path + "[2]",
                        expected: "ConstantAtomicWrapper.IPointer<string>",
                        value: input[2],
                      }),
                  ].every((flag: boolean) => flag)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ConstantAtomicWrapper",
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
          input: ConstantAtomicWrapper,
        ): typia.SnakeCase<ConstantAtomicWrapper> => {
          const $io0 = (input: any): boolean =>
            "boolean" === typeof input.value;
          const $io1 = (input: any): boolean => "number" === typeof input.value;
          const $io2 = (input: any): boolean => "string" === typeof input.value;
          const $co0 = (input: any): any => ({
            value: input.value as any,
          });
          const $co1 = (input: any): any => ({
            value: input.value as any,
          });
          const $co2 = (input: any): any => ({
            value: input.value as any,
          });
          return Array.isArray(input) &&
            input.length === 3 &&
            "object" === typeof input[0] &&
            null !== input[0] &&
            $io0(input[0]) &&
            "object" === typeof input[1] &&
            null !== input[1] &&
            $io1(input[1]) &&
            "object" === typeof input[2] &&
            null !== input[2] &&
            $io2(input[2])
            ? ([
                "object" === typeof input[0] && null !== input[0]
                  ? $co0(input[0])
                  : (input[0] as any),
                "object" === typeof input[1] && null !== input[1]
                  ? $co1(input[1])
                  : (input[1] as any),
                "object" === typeof input[2] && null !== input[2]
                  ? $co2(input[2])
                  : (input[2] as any),
              ] as any)
            : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = general(input);
        return output;
      })(input),
    assert: (input: any): typia.SnakeCase<ConstantAtomicWrapper> => {
      const __is = (
        input: any,
      ): input is typia.SnakeCase<ConstantAtomicWrapper> => {
        const $io0 = (input: any): boolean => "boolean" === typeof input.value;
        const $io1 = (input: any): boolean =>
          "number" === typeof input.value && Number.isFinite(input.value);
        const $io2 = (input: any): boolean => "string" === typeof input.value;
        return (
          Array.isArray(input) &&
          input.length === 3 &&
          "object" === typeof input[0] &&
          null !== input[0] &&
          $io0(input[0]) &&
          "object" === typeof input[1] &&
          null !== input[1] &&
          $io1(input[1]) &&
          "object" === typeof input[2] &&
          null !== input[2] &&
          $io2(input[2])
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.SnakeCase<ConstantAtomicWrapper> => {
          const $guard = (typia.createAssert as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            "boolean" === typeof input.value ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "boolean",
              value: input.value,
            });
          const $ao1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("number" === typeof input.value && Number.isFinite(input.value)) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "number",
              value: input.value,
            });
          const $ao2 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            "string" === typeof input.value ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "string",
              value: input.value,
            });
          return (
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected: "ConstantAtomicWrapper",
                value: input,
              })) &&
              (input.length === 3 ||
                $guard(true, {
                  path: _path + "",
                  expected:
                    "[ConstantAtomicWrapper.IPointer<boolean>, ConstantAtomicWrapper.IPointer<number>, ConstantAtomicWrapper.IPointer<string>]",
                  value: input,
                })) &&
              (((("object" === typeof input[0] && null !== input[0]) ||
                $guard(true, {
                  path: _path + "[0]",
                  expected: "ConstantAtomicWrapper.IPointer<boolean>",
                  value: input[0],
                })) &&
                $ao0(input[0], _path + "[0]", true)) ||
                $guard(true, {
                  path: _path + "[0]",
                  expected: "ConstantAtomicWrapper.IPointer<boolean>",
                  value: input[0],
                })) &&
              (((("object" === typeof input[1] && null !== input[1]) ||
                $guard(true, {
                  path: _path + "[1]",
                  expected: "ConstantAtomicWrapper.IPointer<number>",
                  value: input[1],
                })) &&
                $ao1(input[1], _path + "[1]", true)) ||
                $guard(true, {
                  path: _path + "[1]",
                  expected: "ConstantAtomicWrapper.IPointer<number>",
                  value: input[1],
                })) &&
              (((("object" === typeof input[2] && null !== input[2]) ||
                $guard(true, {
                  path: _path + "[2]",
                  expected: "ConstantAtomicWrapper.IPointer<string>",
                  value: input[2],
                })) &&
                $ao2(input[2], _path + "[2]", true)) ||
                $guard(true, {
                  path: _path + "[2]",
                  expected: "ConstantAtomicWrapper.IPointer<string>",
                  value: input[2],
                }))) ||
            $guard(true, {
              path: _path + "",
              expected: "ConstantAtomicWrapper",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });
