import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_protobuf_decode_CommentTagDefault = (): void =>
  _test_protobuf_decode("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )({
    decode: (input) => typia.protobuf.decode<CommentTagDefault>(input),
    encode: typia.protobuf.createEncode<CommentTagDefault>(),
  });
