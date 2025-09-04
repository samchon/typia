import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_protobuf_isDecode_CommentTagRange = (): void =>
  _test_protobuf_isDecode("CommentTagRange")<CommentTagRange>(CommentTagRange)({
    decode: (input) => typia.protobuf.isDecode<CommentTagRange>(input),
    encode: typia.protobuf.createEncode<CommentTagRange>(),
  });
