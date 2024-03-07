import typia from "typia";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";
import { TypeGuardError } from "typia";
export const test_createAssertGuard_ObjectDynamic = _test_assertGuard(
  TypeGuardError,
)("ObjectDynamic")<ObjectDynamic>(ObjectDynamic)(
  (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): asserts input is ObjectDynamic => {
    const __is = (input: any): input is ObjectDynamic => {
      const $io0 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          return (
            "string" === typeof value ||
            ("number" === typeof value && Number.isFinite(value)) ||
            "boolean" === typeof value
          );
        });
      return (
        "object" === typeof input &&
        null !== input &&
        false === Array.isArray(input) &&
        $io0(input)
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectDynamic => {
        const $guard = (typia.createAssertGuard as any).guard;
        const $join = (typia.createAssertGuard as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          false === _exceptionable ||
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            return (
              "string" === typeof value ||
              ("number" === typeof value && Number.isFinite(value)) ||
              "boolean" === typeof value ||
              $guard(
                _exceptionable,
                {
                  path: _path + $join(key),
                  expected: "(boolean | number | string)",
                  value: value,
                },
                errorFactory,
              )
            );
          });
        return (
          ((("object" === typeof input &&
            null !== input &&
            false === Array.isArray(input)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectDynamic",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ObjectDynamic",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
  },
);
