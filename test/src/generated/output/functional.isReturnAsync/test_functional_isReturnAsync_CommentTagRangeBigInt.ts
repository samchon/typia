import typia from "typia";
import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { CommentTagRangeBigInt } from "../../../structures/CommentTagRangeBigInt";
export const test_functional_isReturnAsync_CommentTagRangeBigInt =
  _test_functional_isReturnAsync("CommentTagRangeBigInt")(
    CommentTagRangeBigInt,
  )(
    (p: (input: CommentTagRangeBigInt) => Promise<CommentTagRangeBigInt>) =>
      async (
        input: CommentTagRangeBigInt,
      ): Promise<CommentTagRangeBigInt | null> => {
        const result = await p(input);
        return ((input: any): input is CommentTagRangeBigInt => {
          const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io1(elem),
            );
          const $io1 = (input: any): boolean =>
            "bigint" === typeof input.greater &&
            3 < input.greater &&
            "bigint" === typeof input.greater_equal &&
            3 <= input.greater_equal &&
            "bigint" === typeof input.less &&
            input.less < 7 &&
            "bigint" === typeof input.less_equal &&
            input.less_equal <= 7 &&
            "bigint" === typeof input.greater_less &&
            3 < input.greater_less &&
            input.greater_less < 7 &&
            "bigint" === typeof input.greater_equal_less &&
            3 <= input.greater_equal_less &&
            input.greater_equal_less < 7 &&
            "bigint" === typeof input.greater_less_equal &&
            3 < input.greater_less_equal &&
            input.greater_less_equal <= 7 &&
            "bigint" === typeof input.greater_equal_less_equal &&
            3 <= input.greater_equal_less_equal &&
            input.greater_equal_less_equal <= 7 &&
            "bigint" === typeof input.equal &&
            10 <= input.equal &&
            input.equal <= 10;
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );
