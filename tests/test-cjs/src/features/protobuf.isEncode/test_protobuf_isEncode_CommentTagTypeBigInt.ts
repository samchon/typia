import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_protobuf_isEncode_CommentTagTypeBigInt = (): void =>
  _test_protobuf_isEncode("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
    CommentTagTypeBigInt,
  )({
    encode: (input) => typia.protobuf.isEncode<CommentTagTypeBigInt>(input),
    decode: typia.protobuf.createDecode<CommentTagTypeBigInt>(),
    message: typia.protobuf.message<CommentTagTypeBigInt>(),
  });
