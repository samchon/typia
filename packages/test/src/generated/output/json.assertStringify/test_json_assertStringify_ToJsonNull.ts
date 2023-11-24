import typia from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_json_assertStringify_ToJsonNull = _test_json_assertStringify(
  "ToJsonNull",
)<ToJsonNull>(ToJsonNull)((input) =>
  ((input: any): string => {
    const assert = (input: any): ToJsonNull => {
      const __is = (input: any): input is ToJsonNull => {
        const $io0 = (input: any): boolean => true;
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ToJsonNull => {
          const $guard = (typia.json.assertStringify as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            true ||
            $guard(_exceptionable, {
              path: _path + ".toJSON",
              expected: "unknown",
              value: input.toJSON,
            });
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "ToJsonNull",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "ToJsonNull",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const stringify = (input: ToJsonNull): string => {
      return "null";
    };
    return stringify(assert(input));
  })(input),
);
