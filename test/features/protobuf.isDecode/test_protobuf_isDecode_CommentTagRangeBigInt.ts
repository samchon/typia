import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_protobuf_createIsDecode_CommentTagRangeBigInt =
  _test_protobuf_isDecode("CommentTagRangeBigInt")<CommentTagRangeBigInt>(
    CommentTagRangeBigInt,
  )({
    decode: (input) => typia.protobuf.isDecode<CommentTagRangeBigInt>(input),
    encode: typia.protobuf.createEncode<CommentTagRangeBigInt>(),
  });
