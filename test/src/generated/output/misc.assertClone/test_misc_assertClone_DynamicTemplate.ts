import typia from "typia";

import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_misc_assertClone_DynamicTemplate = _test_misc_assertClone(
  "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)((input) =>
  ((input: any): typia.Resolved<DynamicTemplate> => {
    const assert = (input: any): DynamicTemplate => {
      const __is = (input: any): input is DynamicTemplate => {
        const $io0 = (input: any): boolean =>
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            if ("string" === typeof key && RegExp(/^prefix_(.*)/).test(key))
              return "string" === typeof value;
            if ("string" === typeof key && RegExp(/(.*)_postfix$/).test(key))
              return "string" === typeof value;
            if (
              "string" === typeof key &&
              RegExp(/^value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key)
            )
              return "number" === typeof value && Number.isFinite(value);
            if (
              "string" === typeof key &&
              RegExp(
                /^between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
              ).test(key)
            )
              return "boolean" === typeof value;
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
        ): input is DynamicTemplate => {
          // @ts-ignore;
          declare const require: (lib: string) => any;
          const $guard = require("typia/lib/functional/$guard").$guard(
            "typia.misc.assertClone",
          );
          const $join = require("typia/lib/functional/$join").$join;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              const value = input[key];
              if (undefined === value) return true;
              if ("string" === typeof key && RegExp(/^prefix_(.*)/).test(key))
                return (
                  "string" === typeof value ||
                  $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "string",
                    value: value,
                  })
                );
              if ("string" === typeof key && RegExp(/(.*)_postfix$/).test(key))
                return (
                  "string" === typeof value ||
                  $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "string",
                    value: value,
                  })
                );
              if (
                "string" === typeof key &&
                RegExp(/^value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key)
              )
                return (
                  ("number" === typeof value && Number.isFinite(value)) ||
                  $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "number",
                    value: value,
                  })
                );
              if (
                "string" === typeof key &&
                RegExp(
                  /^between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                ).test(key)
              )
                return (
                  "boolean" === typeof value ||
                  $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "boolean",
                    value: value,
                  })
                );
              return true;
            });
          return (
            ((("object" === typeof input &&
              null !== input &&
              false === Array.isArray(input)) ||
              $guard(true, {
                path: _path + "",
                expected: "DynamicTemplate",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "DynamicTemplate",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const clone = (input: DynamicTemplate): typia.Resolved<DynamicTemplate> => {
      const $co0 = (input: any): any => {
        const output = {} as any;
        for (const [key, value] of Object.entries(input)) {
          if (RegExp(/^(prefix_(.*))/).test(key)) {
            output[key] = value as any;
            continue;
          }
          if (RegExp(/((.*)_postfix)$/).test(key)) {
            output[key] = value as any;
            continue;
          }
          if (
            RegExp(/^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/).test(key)
          ) {
            output[key] = value as any;
            continue;
          }
          if (
            RegExp(
              /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
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
    assert(input);
    const output = clone(input);
    return output;
  })(input),
);
