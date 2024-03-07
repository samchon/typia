import typia from "typia";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ObjectInternal } from "../../../structures/ObjectInternal";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_assertEqualsCustom_ObjectInternal = _test_assertEquals(
  CustomGuardError,
)("ObjectInternal")<ObjectInternal>(ObjectInternal)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ObjectInternal => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is ObjectInternal => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        "string" === typeof input.id &&
        "string" === typeof input.name &&
        (2 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["id", "name"].some((prop: any) => key === prop)) return true;
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
      ): input is ObjectInternal => {
        const $guard = (typia.assertEquals as any).guard;
        const $join = (typia.assertEquals as any).join;
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
                expected: "string",
                value: input.id,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.name ||
            $guard(
              _exceptionable,
              {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              },
              errorFactory,
            )) &&
          (2 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["id", "name"].some((prop: any) => key === prop)) return true;
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
                expected: "ObjectInternal",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ObjectInternal",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  })(input, (p) => new CustomGuardError(p)),
);
