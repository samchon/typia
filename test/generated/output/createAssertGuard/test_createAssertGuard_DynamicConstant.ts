import typia from "../../../../src";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_createAssertGuard_DynamicConstant = _test_assertGuard(
  "DynamicConstant",
)<DynamicConstant>(DynamicConstant)(
  (input: any): asserts input is DynamicConstant => {
    const __is = (input: any): input is DynamicConstant => {
      return (
        "object" === typeof input &&
        null !== input &&
        "object" === typeof (input as any).value &&
        null !== (input as any).value &&
        "number" === typeof ((input as any).value as any).a &&
        Number.isFinite(((input as any).value as any).a) &&
        "number" === typeof ((input as any).value as any).b &&
        Number.isFinite(((input as any).value as any).b) &&
        "number" === typeof ((input as any).value as any).c &&
        Number.isFinite(((input as any).value as any).c) &&
        "number" === typeof ((input as any).value as any).d &&
        Number.isFinite(((input as any).value as any).d)
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is DynamicConstant => {
        const $guard = (typia.createAssertGuard as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((("object" === typeof input.value && null !== input.value) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "__type",
              value: input.value,
            })) &&
            $ao1(input.value, _path + ".value", true && _exceptionable)) ||
          $guard(_exceptionable, {
            path: _path + ".value",
            expected: "__type",
            value: input.value,
          });
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("number" === typeof input.a && Number.isFinite(input.a)) ||
            $guard(_exceptionable, {
              path: _path + ".a",
              expected: "number",
              value: input.a,
            })) &&
          (("number" === typeof input.b && Number.isFinite(input.b)) ||
            $guard(_exceptionable, {
              path: _path + ".b",
              expected: "number",
              value: input.b,
            })) &&
          (("number" === typeof input.c && Number.isFinite(input.c)) ||
            $guard(_exceptionable, {
              path: _path + ".c",
              expected: "number",
              value: input.c,
            })) &&
          (("number" === typeof input.d && Number.isFinite(input.d)) ||
            $guard(_exceptionable, {
              path: _path + ".d",
              expected: "number",
              value: input.d,
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "DynamicConstant",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "DynamicConstant",
            value: input,
          })
        );
      })(input, "$input", true);
  },
);
