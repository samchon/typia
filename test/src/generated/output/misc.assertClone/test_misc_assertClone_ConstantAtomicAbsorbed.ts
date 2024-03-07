import typia from "typia";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";
import { TypeGuardError } from "typia";
export const test_misc_assertClone_ConstantAtomicAbsorbed =
  _test_misc_assertClone(TypeGuardError)(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)((input) =>
    ((
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): import("typia").Resolved<ConstantAtomicAbsorbed> => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ConstantAtomicAbsorbed => {
        const __is = (input: any): input is ConstantAtomicAbsorbed => {
          return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).id &&
            "number" === typeof (input as any).age &&
            Number.isFinite((input as any).age)
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ConstantAtomicAbsorbed => {
            const $guard = (typia.misc.assertClone as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ("string" === typeof input.id ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".id",
                    expected: '(string & Default<"something">)',
                    value: input.id,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.age && Number.isFinite(input.age)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".age",
                    expected: "(number & Default<20>)",
                    value: input.age,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ConstantAtomicAbsorbed",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ConstantAtomicAbsorbed",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const clone = (
        input: ConstantAtomicAbsorbed,
      ): import("typia").Resolved<ConstantAtomicAbsorbed> => {
        const $co0 = (input: any): any => ({
          id: input.id as any,
          age: input.age as any,
        });
        return "object" === typeof input && null !== input
          ? $co0(input)
          : (input as any);
      };
      assert(input, errorFactory);
      const output = clone(input);
      return output;
    })(input),
  );
