import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_protobuf_createValidateEncode_CommentTagPattern =
  _test_protobuf_validateEncode("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )({
    encode: typia.protobuf.createValidateEncode<CommentTagPattern>(),
    decode: typia.protobuf.createDecode<CommentTagPattern>(),
    message: typia.protobuf.message<CommentTagPattern>(),
  });
