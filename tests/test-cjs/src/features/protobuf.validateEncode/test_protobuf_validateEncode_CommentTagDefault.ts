import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_protobuf_validateEncode_CommentTagDefault = (): void =>
  _test_protobuf_validateEncode("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )({
    encode: (input) => typia.protobuf.validateEncode<CommentTagDefault>(input),
    decode: typia.protobuf.createDecode<CommentTagDefault>(),
    message: typia.protobuf.message<CommentTagDefault>(),
  });
