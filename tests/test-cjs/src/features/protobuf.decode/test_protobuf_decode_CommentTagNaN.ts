import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_decode_CommentTagNaN = (): void =>
  _test_protobuf_decode("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)({
    decode: (input) => typia.protobuf.decode<CommentTagNaN>(input),
    encode: typia.protobuf.createEncode<CommentTagNaN>(),
  });
