import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_protobuf_validateDecode_CommentTagDefault = (): void =>
  _test_protobuf_validateDecode("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )({
    decode: (input) => typia.protobuf.validateDecode<CommentTagDefault>(input),
    encode: typia.protobuf.createEncode<CommentTagDefault>(),
  });
