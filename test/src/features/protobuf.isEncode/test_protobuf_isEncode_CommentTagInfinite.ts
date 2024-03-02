import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_protobuf_isEncode_CommentTagInfinite =
  _test_protobuf_isEncode("CommentTagInfinite")<CommentTagInfinite>(
    CommentTagInfinite,
  )({
    encode: (input) => typia.protobuf.isEncode<CommentTagInfinite>(input),
    decode: typia.protobuf.createDecode<CommentTagInfinite>(),
    message: typia.protobuf.message<CommentTagInfinite>(),
  });
