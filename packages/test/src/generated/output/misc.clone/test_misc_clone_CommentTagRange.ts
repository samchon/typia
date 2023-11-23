import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { CommentTagRange } from "../../../structures/CommentTagRange";

export const test_misc_clone_CommentTagRange = _test_misc_clone(
  "CommentTagRange",
)<CommentTagRange>(CommentTagRange)((input) =>
  ((input: CommentTagRange): typia.Resolved<CommentTagRange> => {
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
        "object" === typeof elem && null !== elem ? $co1(elem) : (elem as any),
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
  })(input),
);
