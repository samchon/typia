import typia from "typia";

import { _test_equals } from "../../../internal/_test_equals";
import { TypeTagNaN } from "../../../structures/TypeTagNaN";

export const test_createEquals_TypeTagNaN = _test_equals(
  "TypeTagNaN",
)<TypeTagNaN>(TypeTagNaN)(
  (input: any, _exceptionable: boolean = true): input is TypeTagNaN => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      "number" === typeof input.value &&
      Number.isFinite(input.value) &&
      "number" === typeof input.ranged &&
      0 <= input.ranged &&
      input.ranged <= 100 &&
      "number" === typeof input.minimum &&
      Number.isFinite(input.minimum) &&
      0 <= input.minimum &&
      "number" === typeof input.maximum &&
      Number.isFinite(input.maximum) &&
      input.maximum <= 100 &&
      "number" === typeof input.multipleOf &&
      input.multipleOf % 3 === 0 &&
      "number" === typeof input.typed &&
      Math.floor(input.typed) === input.typed &&
      -2147483648 <= input.typed &&
      input.typed <= 2147483647 &&
      (6 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (
            [
              "value",
              "ranged",
              "minimum",
              "maximum",
              "multipleOf",
              "typed",
            ].some((prop: any) => key === prop)
          )
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    return "object" === typeof input && null !== input && $io0(input, true);
  },
);
