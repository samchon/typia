import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_misc_assertClone_DynamicUnion = _test_misc_assertClone(
  TypeGuardError,
)("DynamicUnion")<DynamicUnion>(DynamicUnion)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): import("typia").Resolved<DynamicUnion> => {
    const assert = (
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
          const $guard = (typia.misc.assertClone as any).guard;
          const $join = (typia.misc.assertClone as any).join;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              const value = input[key];
              if (undefined === value) return true;
              if (
                "number" === typeof Number(key) &&
                Number.isFinite(Number(key))
              )
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
    };
    const clone = (
      input: DynamicUnion,
    ): import("typia").Resolved<DynamicUnion> => {
      const $co0 = (input: any): any => {
        const output = {} as any;
        for (const [key, value] of Object.entries(input)) {
          if (RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key)) {
            output[key] = value as any;
            continue;
          }
          if (RegExp(/^(prefix_(.*))/).test(key)) {
            output[key] = value as any;
            continue;
          }
          if (RegExp(/((.*)_postfix)$/).test(key)) {
            output[key] = value as any;
            continue;
          }
          if (
            RegExp(
              /^(value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
            ).test(key)
          ) {
            output[key] = value as any;
            continue;
          }
        }
        return output;
      };
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    assert(input, errorFactory);
    const output = clone(input);
    return output;
  })(input),
);
