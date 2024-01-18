import typia from "typia";

import { _test_assert } from "../../../internal/_test_assert";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_assert_ObjectInternal = _test_assert(
  "ObjectInternal",
)<ObjectInternal>(ObjectInternal)((input) =>
  ((input: any): ObjectInternal => {
    const __is = (input: any): input is ObjectInternal => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).id &&
        "string" === typeof (input as any).name
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectInternal => {
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $guard = require("typia/lib/functional/$guard").$guard(
          "typia.assert",
        );
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.id ||
            $guard(_exceptionable, {
              path: _path + ".id",
              expected: "string",
              value: input.id,
            })) &&
          ("string" === typeof input.name ||
            $guard(_exceptionable, {
              path: _path + ".name",
              expected: "string",
              value: input.name,
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectInternal",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "ObjectInternal",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  })(input),
);
