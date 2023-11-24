import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_protobuf_createValidateDecode_CommentTagDefault =
  _test_protobuf_validateDecode("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )({
    decode: typia.protobuf.createValidateDecode<CommentTagDefault>(),
    encode: typia.protobuf.createEncode<CommentTagDefault>(),
  });
