import typia from "typia";
import { _test_assert } from "../../../internal/_test_assert";
import { DynamicConstant } from "../../../structures/DynamicConstant";
import { TypeGuardError } from "typia";
export const test_createAssert_DynamicConstant = _test_assert(TypeGuardError)(
  "DynamicConstant",
)<DynamicConstant>(DynamicConstant)(
  (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): DynamicConstant => {
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
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((("object" === typeof input.value && null !== input.value) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".value",
                expected: "__type",
                value: input.value,
              },
              errorFactory,
            )) &&
            $ao1(input.value, _path + ".value", true && _exceptionable)) ||
          $guard(
            _exceptionable,
            {
              path: _path + ".value",
              expected: "__type",
              value: input.value,
            },
            errorFactory,
          );
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("number" === typeof input.a && Number.isFinite(input.a)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".a",
                expected: "number",
                value: input.a,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.b && Number.isFinite(input.b)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".b",
                expected: "number",
                value: input.b,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.c && Number.isFinite(input.c)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".c",
                expected: "number",
                value: input.c,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.d && Number.isFinite(input.d)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".d",
                expected: "number",
                value: input.d,
              },
              errorFactory,
            ));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "DynamicConstant",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "DynamicConstant",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
);
