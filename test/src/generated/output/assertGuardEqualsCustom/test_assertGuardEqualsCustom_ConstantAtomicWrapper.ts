import typia from "typia";
import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_assertGuardEqualsCustom_ConstantAtomicWrapper =
  _test_assertGuardEquals(CustomGuardError)(
    "ConstantAtomicWrapper",
  )<ConstantAtomicWrapper>(ConstantAtomicWrapper)((input) =>
    ((
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): asserts input is ConstantAtomicWrapper => {
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is ConstantAtomicWrapper => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
          "boolean" === typeof input.value &&
          (1 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (["value"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
          "number" === typeof input.value &&
          Number.isFinite(input.value) &&
          (1 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (["value"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        const $io2 = (input: any, _exceptionable: boolean = true): boolean =>
          "string" === typeof input.value &&
          (1 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (["value"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        return (
          Array.isArray(input) &&
          input.length === 3 &&
          "object" === typeof input[0] &&
          null !== input[0] &&
          $io0(input[0], true) &&
          "object" === typeof input[1] &&
          null !== input[1] &&
          $io1(input[1], true) &&
          "object" === typeof input[2] &&
          null !== input[2] &&
          $io2(input[2], true)
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ConstantAtomicWrapper => {
          const $guard = (typia.assertGuardEquals as any).guard;
          const $join = (typia.assertGuardEquals as any).join;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("boolean" === typeof input.value ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected: "boolean",
                  value: input.value,
                },
                errorFactory,
              )) &&
            (1 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (["value"].some((prop: any) => key === prop)) return true;
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
          const $ao1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.value &&
              Number.isFinite(input.value)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected: "number",
                  value: input.value,
                },
                errorFactory,
              )) &&
            (1 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (["value"].some((prop: any) => key === prop)) return true;
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
          const $ao2 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("string" === typeof input.value ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected: "string",
                  value: input.value,
                },
                errorFactory,
              )) &&
            (1 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (["value"].some((prop: any) => key === prop)) return true;
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
    })(input, (p) => new CustomGuardError(p)),
  );
