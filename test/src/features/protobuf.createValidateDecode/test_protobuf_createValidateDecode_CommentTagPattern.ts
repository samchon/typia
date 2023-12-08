import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_protobuf_createValidateDecode_CommentTagPattern =
  _test_protobuf_validateDecode("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )({
    decode: typia.protobuf.createValidateDecode<CommentTagPattern>(),
    encode: typia.protobuf.createEncode<CommentTagPattern>(),
  });
