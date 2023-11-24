import typia from "typia";

import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { CommentTagRangeBigInt } from "../../../structures/CommentTagRangeBigInt";

export const test_misc_createPrune_CommentTagRangeBigInt = _test_misc_prune(
  "CommentTagRangeBigInt",
)<CommentTagRangeBigInt>(CommentTagRangeBigInt)(
  (input: CommentTagRangeBigInt): void => {
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
    const $pp0 = (input: any) =>
      input.forEach((elem: any) => {
        if ("object" === typeof elem && null !== elem) $po1(elem);
      });
    const $po0 = (input: any): any => {
      if (Array.isArray(input.value)) $pp0(input.value);
      for (const key of Object.keys(input)) {
        if ("value" === key) continue;
        delete input[key];
      }
    };
    const $po1 = (input: any): any => {
      for (const key of Object.keys(input)) {
        if (
          "greater" === key ||
          "greater_equal" === key ||
          "less" === key ||
          "less_equal" === key ||
          "greater_less" === key ||
          "greater_equal_less" === key ||
          "greater_less_equal" === key ||
          "greater_equal_less_equal" === key ||
          "equal" === key
        )
          continue;
        delete input[key];
      }
    };
    if ("object" === typeof input && null !== input) $po0(input);
  },
);
