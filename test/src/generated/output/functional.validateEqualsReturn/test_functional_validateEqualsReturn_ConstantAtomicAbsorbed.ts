import typia from "typia";
import { _test_functional_validateEqualsReturn } from "../../../internal/_test_functional_validateEqualsReturn";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";
export const test_functional_validateEqualsReturn_ConstantAtomicAbsorbed =
  _test_functional_validateEqualsReturn("ConstantAtomicAbsorbed")(
    ConstantAtomicAbsorbed,
  )(
    (p: (input: ConstantAtomicAbsorbed) => ConstantAtomicAbsorbed) =>
      (
        input: ConstantAtomicAbsorbed,
      ): import("typia").IValidation<ConstantAtomicAbsorbed> => {
        const result = ((
          input: any,
        ): typia.IValidation<ConstantAtomicAbsorbed> => {
          const errors = [] as any[];
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ConstantAtomicAbsorbed => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "string" === typeof input.id &&
              "number" === typeof input.age &&
              Number.isFinite(input.age) &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["id", "age"].some((prop: any) => key === prop))
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          };
          if (false === __is(input)) {
            const $report = (
              typia.functional.validateEqualsReturn as any
            ).report(errors);
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ConstantAtomicAbsorbed => {
              const $join = (typia.functional.validateEqualsReturn as any).join;
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "string" === typeof input.id ||
                    $report(_exceptionable, {
                      path: _path + ".id",
                      expected: '(string & Default<"something">)',
                      value: input.id,
                    }),
                  ("number" === typeof input.age &&
                    Number.isFinite(input.age)) ||
                    $report(_exceptionable, {
                      path: _path + ".age",
                      expected: "(number & Default<20>)",
                      value: input.age,
                    }),
                  2 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        if (["id", "age"].some((prop: any) => key === prop))
                          return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $report(_exceptionable, {
                          path: _path + $join(key),
                          expected: "undefined",
                          value: value,
                        });
                      })
                      .every((flag: boolean) => flag),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ConstantAtomicAbsorbed",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ConstantAtomicAbsorbed",
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
        })(p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
