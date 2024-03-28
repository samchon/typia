import typia from "typia";

import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { CommentTagTypeBigInt } from "../../../structures/CommentTagTypeBigInt";

export const test_functional_isReturn_CommentTagTypeBigInt =
  _test_functional_isReturn("CommentTagTypeBigInt")(CommentTagTypeBigInt)(
    (p: (input: CommentTagTypeBigInt) => CommentTagTypeBigInt) =>
      (input: CommentTagTypeBigInt): CommentTagTypeBigInt | null => {
        const result = p(input);
        return ((input: any): input is CommentTagTypeBigInt => {
          return (
            "object" === typeof input &&
            null !== input &&
            "bigint" === typeof (input as any).in64 &&
            "bigint" === typeof (input as any).uint64 &&
            BigInt(0) <= (input as any).uint64
          );
        })(result)
          ? result
          : null;
      },
  );
