import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_protobuf_createAssertDecode_CommentTagRangeBigInt =
  _test_protobuf_assertDecode("CommentTagRangeBigInt")<CommentTagRangeBigInt>(
    CommentTagRangeBigInt,
  )({
    decode: (input) =>
      typia.protobuf.assertDecode<CommentTagRangeBigInt>(input),
    encode: typia.protobuf.createEncode<CommentTagRangeBigInt>(),
  });
