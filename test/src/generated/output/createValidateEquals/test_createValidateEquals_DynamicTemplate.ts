import typia from "typia";

import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_createValidateEquals_DynamicTemplate = _test_validateEquals(
  "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)(
  (input: any): typia.IValidation<DynamicTemplate> => {
    const errors = [] as any[];
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is DynamicTemplate => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $join = require("typia/lib/functional/$join").$join;
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
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
          return false;
        });
      return (
        "object" === typeof input &&
        null !== input &&
        false === Array.isArray(input) &&
        $io0(input, true)
      );
    };
    if (false === __is(input)) {
      const $report = require("typia/lib/functional/$report").$report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is DynamicTemplate => {
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $join = require("typia/lib/functional/$join").$join;
        const $vo0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            false === _exceptionable ||
              Object.keys(input)
                .map((key: any) => {
                  const value = input[key];
                  if (undefined === value) return true;
                  if (
                    "string" === typeof key &&
                    RegExp(/^prefix_(.*)/).test(key)
                  )
                    return (
                      "string" === typeof value ||
                      $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "string",
                        value: value,
                      })
                    );
                  if (
                    "string" === typeof key &&
                    RegExp(/(.*)_postfix$/).test(key)
                  )
                    return (
                      "string" === typeof value ||
                      $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "string",
                        value: value,
                      })
                    );
                  if (
                    "string" === typeof key &&
                    RegExp(/^value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(
                      key,
                    )
                  )
                    return (
                      ("number" === typeof value && Number.isFinite(value)) ||
                      $report(_exceptionable, {
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
                      $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "boolean",
                        value: value,
                      })
                    );
                  return $report(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  });
                })
                .every((flag: boolean) => flag),
          ].every((flag: boolean) => flag);
        return (
          ((("object" === typeof input &&
            null !== input &&
            false === Array.isArray(input)) ||
            $report(true, {
              path: _path + "",
              expected: "DynamicTemplate",
              value: input,
            })) &&
            $vo0(input, _path + "", true)) ||
          $report(true, {
            path: _path + "",
            expected: "DynamicTemplate",
            value: input,
          })
        );
      })(input, "$input", true);
    }
    const success = 0 === errors.length;
    return {
      success,
      errors,
      data: success ? input : undefined,
    } as any;
  },
);
