import typia from "typia";
import { _test_assert } from "../../../internal/_test_assert";
import { DynamicUnion } from "../../../structures/DynamicUnion";
import { TypeGuardError } from "typia";
export const test_createAssert_DynamicUnion = _test_assert(TypeGuardError)(
  "DynamicUnion",
)<DynamicUnion>(DynamicUnion)(
  (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): DynamicUnion => {
    const __is = (input: any): input is DynamicUnion => {
      const $io0 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          if ("number" === typeof Number(key) && Number.isFinite(Number(key)))
            return "string" === typeof value;
          if ("string" === typeof key && RegExp(/^prefix_(.*)/).test(key))
            return "string" === typeof value;
          if ("string" === typeof key && RegExp(/(.*)_postfix$/).test(key))
            return "string" === typeof value;
          if (
            "string" === typeof key &&
            RegExp(
              /^value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
            ).test(key)
          )
            return "number" === typeof value && Number.isFinite(value);
          return true;
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
      ): input is DynamicUnion => {
        const $guard = (typia.createAssert as any).guard;
        const $join = (typia.createAssert as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          false === _exceptionable ||
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            if ("number" === typeof Number(key) && Number.isFinite(Number(key)))
              return (
                "string" === typeof value ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "string",
                    value: value,
                  },
                  errorFactory,
                )
              );
            if ("string" === typeof key && RegExp(/^prefix_(.*)/).test(key))
              return (
                "string" === typeof value ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "string",
                    value: value,
                  },
                  errorFactory,
                )
              );
            if ("string" === typeof key && RegExp(/(.*)_postfix$/).test(key))
              return (
                "string" === typeof value ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "string",
                    value: value,
                  },
                  errorFactory,
                )
              );
            if (
              "string" === typeof key &&
              RegExp(
                /^value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
              ).test(key)
            )
              return (
                ("number" === typeof value && Number.isFinite(value)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "number",
                    value: value,
                  },
                  errorFactory,
                )
              );
            return true;
          });
        return (
          ((("object" === typeof input &&
            null !== input &&
            false === Array.isArray(input)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "DynamicUnion",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "DynamicUnion",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
);
