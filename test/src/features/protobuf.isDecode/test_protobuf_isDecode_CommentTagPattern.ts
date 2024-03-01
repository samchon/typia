import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_protobuf_isDecode_CommentTagPattern = _test_protobuf_isDecode(
  "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)({
  decode: (input) => typia.protobuf.isDecode<CommentTagPattern>(input),
  encode: typia.protobuf.createEncode<CommentTagPattern>(),
});
