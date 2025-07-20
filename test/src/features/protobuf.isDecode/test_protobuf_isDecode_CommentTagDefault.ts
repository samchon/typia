import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_protobuf_isDecode_CommentTagDefault = (): void =>
  _test_protobuf_isDecode("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )({
    decode: (input) => typia.protobuf.isDecode<CommentTagDefault>(input),
    encode: typia.protobuf.createEncode<CommentTagDefault>(),
  });
