import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_protobuf_createIsDecode_CommentTagArray = (): void =>
  _test_protobuf_isDecode("CommentTagArray")<CommentTagArray>(CommentTagArray)({
    decode: typia.protobuf.createIsDecode<CommentTagArray>(),
    encode: typia.protobuf.createEncode<CommentTagArray>(),
  });
