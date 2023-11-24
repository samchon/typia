import typia from "typia";

import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_json_isParse_DynamicTemplate = _test_json_isParse(
  "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)((input) =>
  ((input: any): typia.Primitive<DynamicTemplate> => {
    const is = (input: any): input is DynamicTemplate => {
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
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
  })(input),
);
