import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";

export const test_json_assertStringify_ConstantAtomicAbsorbed =
  _test_json_assertStringify(TypeGuardError)(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)((input) =>
    ((
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): string => {
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
            const $guard = (typia.json.assertStringify as any).guard;
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
      const stringify = (input: ConstantAtomicAbsorbed): string => {
        const $string = (typia.json.assertStringify as any).string;
        const $number = (typia.json.assertStringify as any).number;
        return `{"id":${$string((input as any).id)},"age":${$number(
          (input as any).age,
        )}}`;
      };
      return stringify(assert(input, errorFactory));
    })(input),
  );
