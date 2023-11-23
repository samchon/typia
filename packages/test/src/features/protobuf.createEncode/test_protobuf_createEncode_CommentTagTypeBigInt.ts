import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_protobuf_createEncode_CommentTagTypeBigInt =
  _test_protobuf_encode("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
    CommentTagTypeBigInt,
  )({
    encode: typia.protobuf.createEncode<CommentTagTypeBigInt>(),
    decode: typia.protobuf.createDecode<CommentTagTypeBigInt>(),
    message: typia.protobuf.message<CommentTagTypeBigInt>(),
  });
