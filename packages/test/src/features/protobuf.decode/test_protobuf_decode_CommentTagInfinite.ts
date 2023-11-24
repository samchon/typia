import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_protobuf_createDecode_CommentTagInfinite =
  _test_protobuf_decode("CommentTagInfinite")<CommentTagInfinite>(
    CommentTagInfinite,
  )({
    decode: (input) => typia.protobuf.decode<CommentTagInfinite>(input),
    encode: typia.protobuf.createEncode<CommentTagInfinite>(),
  });
