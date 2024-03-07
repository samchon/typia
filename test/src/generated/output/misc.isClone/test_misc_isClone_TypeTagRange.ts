import typia from "typia";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { TypeTagRange } from "../../../structures/TypeTagRange";
export const test_misc_isClone_TypeTagRange = _test_misc_isClone(
  "TypeTagRange",
)<TypeTagRange>(TypeTagRange)((input) =>
  ((input: any): import("typia").Resolved<TypeTagRange> | null => {
    const is = (input: any): input is TypeTagRange => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.value) &&
        input.value.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io1(elem),
        );
      const $io1 = (input: any): boolean =>
        "number" === typeof input.greater &&
        Math.floor(input.greater) === input.greater &&
        -2147483648 <= input.greater &&
        input.greater <= 2147483647 &&
        3 < input.greater &&
        "number" === typeof input.greater_equal &&
        Math.floor(input.greater_equal) === input.greater_equal &&
        -2147483648 <= input.greater_equal &&
        input.greater_equal <= 2147483647 &&
        3 <= input.greater_equal &&
        "number" === typeof input.less &&
        Math.floor(input.less) === input.less &&
        -2147483648 <= input.less &&
        input.less <= 2147483647 &&
        input.less < 7 &&
        "number" === typeof input.less_equal &&
        Math.floor(input.less_equal) === input.less_equal &&
        -2147483648 <= input.less_equal &&
        input.less_equal <= 2147483647 &&
        input.less_equal <= 7 &&
        "number" === typeof input.greater_less &&
        Math.floor(input.greater_less) === input.greater_less &&
        -2147483648 <= input.greater_less &&
        input.greater_less <= 2147483647 &&
        3 < input.greater_less &&
        input.greater_less < 7 &&
        "number" === typeof input.greater_equal_less &&
        Math.floor(input.greater_equal_less) === input.greater_equal_less &&
        -2147483648 <= input.greater_equal_less &&
        input.greater_equal_less <= 2147483647 &&
        3 <= input.greater_equal_less &&
        input.greater_equal_less < 7 &&
        "number" === typeof input.greater_less_equal &&
        Math.floor(input.greater_less_equal) === input.greater_less_equal &&
        -2147483648 <= input.greater_less_equal &&
        input.greater_less_equal <= 2147483647 &&
        3 < input.greater_less_equal &&
        input.greater_less_equal <= 7 &&
        "number" === typeof input.greater_equal_less_equal &&
        Math.floor(input.greater_equal_less_equal) ===
          input.greater_equal_less_equal &&
        -2147483648 <= input.greater_equal_less_equal &&
        input.greater_equal_less_equal <= 2147483647 &&
        3 <= input.greater_equal_less_equal &&
        input.greater_equal_less_equal <= 7 &&
        "number" === typeof input.equal &&
        Math.floor(input.equal) === input.equal &&
        -2147483648 <= input.equal &&
        input.equal <= 2147483647 &&
        10 <= input.equal &&
        input.equal <= 10;
      return "object" === typeof input && null !== input && $io0(input);
    };
    const clone = (
      input: TypeTagRange,
    ): import("typia").Resolved<TypeTagRange> => {
      const $io1 = (input: any): boolean =>
        "number" === typeof input.greater &&
        Math.floor(input.greater) === input.greater &&
        -2147483648 <= input.greater &&
        input.greater <= 2147483647 &&
        3 < input.greater &&
        "number" === typeof input.greater_equal &&
        Math.floor(input.greater_equal) === input.greater_equal &&
        -2147483648 <= input.greater_equal &&
        input.greater_equal <= 2147483647 &&
        3 <= input.greater_equal &&
        "number" === typeof input.less &&
        Math.floor(input.less) === input.less &&
        -2147483648 <= input.less &&
        input.less <= 2147483647 &&
        input.less < 7 &&
        "number" === typeof input.less_equal &&
        Math.floor(input.less_equal) === input.less_equal &&
        -2147483648 <= input.less_equal &&
        input.less_equal <= 2147483647 &&
        input.less_equal <= 7 &&
        "number" === typeof input.greater_less &&
        Math.floor(input.greater_less) === input.greater_less &&
        -2147483648 <= input.greater_less &&
        input.greater_less <= 2147483647 &&
        3 < input.greater_less &&
        input.greater_less < 7 &&
        "number" === typeof input.greater_equal_less &&
        Math.floor(input.greater_equal_less) === input.greater_equal_less &&
        -2147483648 <= input.greater_equal_less &&
        input.greater_equal_less <= 2147483647 &&
        3 <= input.greater_equal_less &&
        input.greater_equal_less < 7 &&
        "number" === typeof input.greater_less_equal &&
        Math.floor(input.greater_less_equal) === input.greater_less_equal &&
        -2147483648 <= input.greater_less_equal &&
        input.greater_less_equal <= 2147483647 &&
        3 < input.greater_less_equal &&
        input.greater_less_equal <= 7 &&
        "number" === typeof input.greater_equal_less_equal &&
        Math.floor(input.greater_equal_less_equal) ===
          input.greater_equal_less_equal &&
        -2147483648 <= input.greater_equal_less_equal &&
        input.greater_equal_less_equal <= 2147483647 &&
        3 <= input.greater_equal_less_equal &&
        input.greater_equal_less_equal <= 7 &&
        "number" === typeof input.equal &&
        Math.floor(input.equal) === input.equal &&
        -2147483648 <= input.equal &&
        input.equal <= 2147483647 &&
        10 <= input.equal &&
        input.equal <= 10;
      const $cp0 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $co1(elem)
            : (elem as any),
        );
      const $co0 = (input: any): any => ({
        value: Array.isArray(input.value)
          ? $cp0(input.value)
          : (input.value as any),
      });
      const $co1 = (input: any): any => ({
        greater: input.greater as any,
        greater_equal: input.greater_equal as any,
        less: input.less as any,
        less_equal: input.less_equal as any,
        greater_less: input.greater_less as any,
        greater_equal_less: input.greater_equal_less as any,
        greater_less_equal: input.greater_less_equal as any,
        greater_equal_less_equal: input.greater_equal_less_equal as any,
        equal: input.equal as any,
      });
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  })(input),
);
