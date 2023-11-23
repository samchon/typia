import typia from "typia";

import { _test_is } from "../../../internal/_test_is";
import { CommentTagBigInt } from "../../../structures/CommentTagBigInt";

export const test_is_CommentTagBigInt = _test_is(
  "CommentTagBigInt",
)<CommentTagBigInt>(CommentTagBigInt)((input) =>
  ((input: any): input is CommentTagBigInt => {
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
  })(input),
);
