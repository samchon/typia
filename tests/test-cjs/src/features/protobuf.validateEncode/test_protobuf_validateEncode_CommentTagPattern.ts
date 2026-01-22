import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_protobuf_validateEncode_CommentTagPattern = (): void =>
  _test_protobuf_validateEncode("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )({
    encode: (input) => typia.protobuf.validateEncode<CommentTagPattern>(input),
    decode: typia.protobuf.createDecode<CommentTagPattern>(),
    message: typia.protobuf.message<CommentTagPattern>(),
  });
