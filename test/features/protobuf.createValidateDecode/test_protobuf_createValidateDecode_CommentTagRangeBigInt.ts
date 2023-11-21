import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_protobuf_createValidateDecode_CommentTagRangeBigInt =
  _test_protobuf_validateDecode("CommentTagRangeBigInt")<CommentTagRangeBigInt>(
    CommentTagRangeBigInt,
  )({
    decode: typia.protobuf.createValidateDecode<CommentTagRangeBigInt>(),
    encode: typia.protobuf.createEncode<CommentTagRangeBigInt>(),
  });
