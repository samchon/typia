import typia from "typia";

import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_createAssertGuardEquals_ConstantAtomicWrapper =
  _test_assertGuardEquals("ConstantAtomicWrapper")<ConstantAtomicWrapper>(
    ConstantAtomicWrapper,
  )((input: any): asserts input is ConstantAtomicWrapper => {
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
        const $guard = (typia.createAssertGuardEquals as any).guard;
        const $join = (typia.createAssertGuardEquals as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("boolean" === typeof input.value ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "boolean",
              value: input.value,
            })) &&
          (1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["value"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
            }));
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("number" === typeof input.value && Number.isFinite(input.value)) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "number",
              value: input.value,
            })) &&
          (1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["value"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
            }));
        const $ao2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.value ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "string",
              value: input.value,
            })) &&
          (1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["value"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
            }));
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
  });
