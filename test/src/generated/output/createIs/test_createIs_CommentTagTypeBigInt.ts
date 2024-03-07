import typia from "typia";
import { _test_is } from "../../../internal/_test_is";
import { CommentTagTypeBigInt } from "../../../structures/CommentTagTypeBigInt";
export const test_createIs_CommentTagTypeBigInt = _test_is(
  "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(CommentTagTypeBigInt)(
  (input: any): input is CommentTagTypeBigInt => {
    return (
      "object" === typeof input &&
      null !== input &&
      "bigint" === typeof (input as any).in64 &&
      "bigint" === typeof (input as any).uint64 &&
      BigInt(0) <= (input as any).uint64
    );
  },
);
