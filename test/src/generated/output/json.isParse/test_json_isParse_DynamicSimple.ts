import typia from "typia";

import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_json_isParse_DynamicSimple = _test_json_isParse(
  "DynamicSimple",
)<DynamicSimple>(DynamicSimple)((input) =>
  ((input: any): import("typia").Primitive<DynamicSimple> => {
    const is = (input: any): input is DynamicSimple => {
      const $io0 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        false === Array.isArray(input.value) &&
        $io1(input.value);
      const $io1 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          return "number" === typeof value && Number.isFinite(value);
        });
      return "object" === typeof input && null !== input && $io0(input);
    };
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
  })(input),
);
