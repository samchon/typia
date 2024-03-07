import typia from "typia";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_createAssertGuardCustom_ConstantAtomicAbsorbed =
  _test_assertGuard(CustomGuardError)(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): asserts input is ConstantAtomicAbsorbed => {
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
          const $guard = (typia.createAssertGuard as any).guard;
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
    },
  );
