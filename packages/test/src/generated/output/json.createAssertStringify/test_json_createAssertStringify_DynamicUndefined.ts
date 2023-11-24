import typia from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_json_createAssertStringify_DynamicUndefined =
  _test_json_assertStringify("DynamicUndefined")<DynamicUndefined>(
    DynamicUndefined,
  )((input: any): string => {
    const assert = (input: any): DynamicUndefined => {
      const __is = (input: any): input is DynamicUndefined => {
        const $io0 = (input: any): boolean =>
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            if (true) return null !== value && undefined === value;
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
        ): input is DynamicUndefined => {
          const $guard = (typia.json.createAssertStringify as any).guard;
          const $join = (typia.json.createAssertStringify as any).join;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              const value = input[key];
              if (undefined === value) return true;
              if (true)
                return (
                  (null !== value ||
                    $guard(_exceptionable, {
                      path: _path + $join(key),
                      expected: "undefined",
                      value: value,
                    })) &&
                  (undefined === value ||
                    $guard(_exceptionable, {
                      path: _path + $join(key),
                      expected: "undefined",
                      value: value,
                    }))
                );
              return true;
            });
          return (
            ((("object" === typeof input &&
              null !== input &&
              false === Array.isArray(input)) ||
              $guard(true, {
                path: _path + "",
                expected: "DynamicUndefined",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "DynamicUndefined",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const stringify = (input: DynamicUndefined): string => {
      const $so0 = (input: any): any =>
        `{${Object.entries(input)
          .map(([key, value]: [string, any]) => {
            if (undefined === value) return "";
            return `${JSON.stringify(key)}:${undefined}`;
          })
          .filter((str: any) => "" !== str)
          .join(",")}}`;
      return $so0(input);
    };
    return stringify(assert(input));
  });
