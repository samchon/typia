import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_createAssertEqualsCustom_DynamicUnion = _test_assertEquals(
  CustomGuardError,
)("DynamicUnion")<DynamicUnion>(DynamicUnion)(
  (
    input: any,
    errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
      new CustomGuardError(p),
  ): DynamicUnion => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is DynamicUnion => {
      const $join = (typia.createAssertEquals as any).join;
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
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
          return false;
        });
      return (
        "object" === typeof input &&
        null !== input &&
        false === Array.isArray(input) &&
        $io0(input, true)
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is DynamicUnion => {
        const $guard = (typia.createAssertEquals as any).guard;
        const $join = (typia.createAssertEquals as any).join;
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
            return $guard(
              _exceptionable,
              {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              },
              errorFactory,
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
