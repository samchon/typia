import typia from "typia";

import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { DynamicTag } from "../../../structures/DynamicTag";

export const test_misc_isPrune_DynamicTag = _test_misc_isPrune(
  "DynamicTag",
)<DynamicTag>(DynamicTag)((input) =>
  ((input: any): input is DynamicTag => {
    const is = (input: any): input is DynamicTag => {
      const $io0 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          if (
            "number" === typeof Number(key) &&
            0 <= Number(key) &&
            Number(key) < 10
          )
            return "bigint" === typeof value && BigInt(0) <= value;
          if (
            "string" === typeof key &&
            /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
              key,
            )
          )
            return (
              "string" === typeof value &&
              /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
                value,
              )
            );
          return true;
        });
      return (
        "object" === typeof input &&
        null !== input &&
        false === Array.isArray(input) &&
        $io0(input)
      );
    };
    const prune = (input: DynamicTag): void => {
      const $po0 = (input: any): any => {
        Object.entries(input).forEach(([key, value]: any) => {
          if (undefined === value) return;
          if (RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key)) {
          }
          if (RegExp(/(.*)/).test(key)) {
          }
        });
        for (const key of Object.keys(input)) {
          if (
            RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key) ||
            RegExp(/(.*)/).test(key)
          )
            continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
  })(input),
);
