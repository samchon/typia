import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_protobuf_isEncode_CommentTagRangeBigInt =
  _test_protobuf_isEncode("CommentTagRangeBigInt")<CommentTagRangeBigInt>(
    CommentTagRangeBigInt,
  )({
    encode: (input) => typia.protobuf.isEncode<CommentTagRangeBigInt>(input),
    decode: typia.protobuf.createDecode<CommentTagRangeBigInt>(),
    message: typia.protobuf.message<CommentTagRangeBigInt>(),
  });
