import typia from "typia";

import { _test_functional_isFunction } from "../../../internal/_test_functional_isFunction";
import { CommentTagBigInt } from "../../../structures/CommentTagBigInt";

export const test_functional_isFunction_CommentTagBigInt =
  _test_functional_isFunction("CommentTagBigInt")(CommentTagBigInt)(
    (p: (input: CommentTagBigInt) => CommentTagBigInt) =>
      (input: CommentTagBigInt): CommentTagBigInt | null => {
        if (
          false ===
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
          })(input)
        )
          return null;
        const result = p(input);
        return ((input: any): input is CommentTagBigInt => {
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
        })(result)
          ? result
          : null;
      },
  );
