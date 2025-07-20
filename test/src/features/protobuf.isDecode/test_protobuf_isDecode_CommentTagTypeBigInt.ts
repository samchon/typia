import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_protobuf_isDecode_CommentTagTypeBigInt = (): void =>
  _test_protobuf_isDecode("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
    CommentTagTypeBigInt,
  )({
    decode: (input) => typia.protobuf.isDecode<CommentTagTypeBigInt>(input),
    encode: typia.protobuf.createEncode<CommentTagTypeBigInt>(),
  });
