import typia from "typia";

import { _test_misc_validateClone } from "../../../internal/_test_misc_validateClone";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_misc_validateClone_DynamicTemplate = _test_misc_validateClone(
  "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)((input) =>
  ((input: any): typia.IValidation<typia.Resolved<DynamicTemplate>> => {
    const validate = (input: any): typia.IValidation<DynamicTemplate> => {
      const errors = [] as any[];
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
      if (false === __is(input)) {
        const $report = (typia.misc.validateClone as any).report(errors);
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is DynamicTemplate => {
          const $join = (typia.misc.validateClone as any).join;
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
                      RegExp(
                        /^value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                      ).test(key)
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
                    return true;
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
    };
    const clone = (
      input: DynamicTemplate,
    ): import("typia").Resolved<DynamicTemplate> => {
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
    const output = validate(input) as any;
    if (output.success) output.data = clone(input);
    return output;
  })(input),
);
