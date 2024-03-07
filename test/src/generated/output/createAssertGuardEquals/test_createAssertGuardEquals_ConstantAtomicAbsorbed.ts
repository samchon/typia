import typia from "typia";
import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";
import { TypeGuardError } from "typia";
export const test_createAssertGuardEquals_ConstantAtomicAbsorbed =
  _test_assertGuardEquals(TypeGuardError)(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)(
    (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): asserts input is ConstantAtomicAbsorbed => {
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is ConstantAtomicAbsorbed => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
          "string" === typeof input.id &&
          "number" === typeof input.age &&
          Number.isFinite(input.age) &&
          (2 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (["id", "age"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        return "object" === typeof input && null !== input && $io0(input, true);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ConstantAtomicAbsorbed => {
          const $guard = (typia.createAssertGuardEquals as any).guard;
          const $join = (typia.createAssertGuardEquals as any).join;
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
              )) &&
            (2 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (["id", "age"].some((prop: any) => key === prop))
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
              }));
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
