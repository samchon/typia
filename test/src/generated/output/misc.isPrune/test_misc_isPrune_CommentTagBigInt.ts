import typia from "typia";

import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { CommentTagBigInt } from "../../../structures/CommentTagBigInt";

export const test_misc_isPrune_CommentTagBigInt = _test_misc_isPrune(
  "CommentTagBigInt",
)<CommentTagBigInt>(CommentTagBigInt)((input) =>
  ((input: any): input is CommentTagBigInt => {
    const is = (input: any): input is CommentTagBigInt => {
      return (
        "object" === typeof input &&
        null !== input &&
        "bigint" === typeof (input as any).value &&
        "bigint" === typeof (input as any).ranged &&
        0 <= (input as any).ranged &&
        (input as any).ranged <= 100 &&
        "bigint" === typeof (input as any).minimum &&
        0 <= (input as any).minimum &&
        "bigint" === typeof (input as any).maximum &&
        (input as any).maximum <= 100 &&
        "bigint" === typeof (input as any).multipleOf &&
        (input as any).multipleOf % 3n === 0n
      );
    };
    const prune = (input: CommentTagBigInt): void => {
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if (
            "value" === key ||
            "ranged" === key ||
            "minimum" === key ||
            "maximum" === key ||
            "multipleOf" === key
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
