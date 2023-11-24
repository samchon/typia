import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_protobuf_createDecode_CommentTagTypeBigInt =
  _test_protobuf_decode("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
    CommentTagTypeBigInt,
  )({
    decode: (input) => typia.protobuf.decode<CommentTagTypeBigInt>(input),
    encode: typia.protobuf.createEncode<CommentTagTypeBigInt>(),
  });
