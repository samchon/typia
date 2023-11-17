import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_json_createIsParse_DynamicSimple = _test_json_isParse(
  "DynamicSimple",
)<DynamicSimple>(DynamicSimple)(
  (input: any): typia.Primitive<DynamicSimple> => {
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
          if (true) return "number" === typeof value && Number.isFinite(value);
          return true;
        });
      return "object" === typeof input && null !== input && $io0(input);
    };
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
  },
);
