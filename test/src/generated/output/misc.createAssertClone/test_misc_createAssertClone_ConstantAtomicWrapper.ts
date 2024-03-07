import typia from "typia";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";
import { TypeGuardError } from "typia";
export const test_misc_createAssertClone_ConstantAtomicWrapper =
  _test_misc_assertClone(TypeGuardError)(
    "ConstantAtomicWrapper",
  )<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
    (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): import("typia").Resolved<ConstantAtomicWrapper> => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ConstantAtomicWrapper => {
        const __is = (input: any): input is ConstantAtomicWrapper => {
          const $io0 = (input: any): boolean =>
            "boolean" === typeof input.value;
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
          ): input is ConstantAtomicWrapper => {
            const $guard = (typia.misc.createAssertClone as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              "boolean" === typeof input.value ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected: "boolean",
                  value: input.value,
                },
                errorFactory,
              );
            const $ao1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ("number" === typeof input.value &&
                Number.isFinite(input.value)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected: "number",
                  value: input.value,
                },
                errorFactory,
              );
            const $ao2 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              "string" === typeof input.value ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected: "string",
                  value: input.value,
                },
                errorFactory,
              );
            return (
              ((Array.isArray(input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ConstantAtomicWrapper",
                    value: input,
                  },
                  errorFactory,
                )) &&
                (input.length === 3 ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected:
                        "[ConstantAtomicWrapper.IPointer<boolean>, ConstantAtomicWrapper.IPointer<number>, ConstantAtomicWrapper.IPointer<string>]",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input[0] && null !== input[0]) ||
                  $guard(
                    true,
                    {
                      path: _path + "[0]",
                      expected: "ConstantAtomicWrapper.IPointer<boolean>",
                      value: input[0],
                    },
                    errorFactory,
                  )) &&
                  $ao0(input[0], _path + "[0]", true)) ||
                  $guard(
                    true,
                    {
                      path: _path + "[0]",
                      expected: "ConstantAtomicWrapper.IPointer<boolean>",
                      value: input[0],
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input[1] && null !== input[1]) ||
                  $guard(
                    true,
                    {
                      path: _path + "[1]",
                      expected: "ConstantAtomicWrapper.IPointer<number>",
                      value: input[1],
                    },
                    errorFactory,
                  )) &&
                  $ao1(input[1], _path + "[1]", true)) ||
                  $guard(
                    true,
                    {
                      path: _path + "[1]",
                      expected: "ConstantAtomicWrapper.IPointer<number>",
                      value: input[1],
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input[2] && null !== input[2]) ||
                  $guard(
                    true,
                    {
                      path: _path + "[2]",
                      expected: "ConstantAtomicWrapper.IPointer<string>",
                      value: input[2],
                    },
                    errorFactory,
                  )) &&
                  $ao2(input[2], _path + "[2]", true)) ||
                  $guard(
                    true,
                    {
                      path: _path + "[2]",
                      expected: "ConstantAtomicWrapper.IPointer<string>",
                      value: input[2],
                    },
                    errorFactory,
                  ))) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ConstantAtomicWrapper",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const clone = (
        input: ConstantAtomicWrapper,
      ): import("typia").Resolved<ConstantAtomicWrapper> => {
        const $io0 = (input: any): boolean => "boolean" === typeof input.value;
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
      assert(input, errorFactory);
      const output = clone(input);
      return output;
    },
  );
