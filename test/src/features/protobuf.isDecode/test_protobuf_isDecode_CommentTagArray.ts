import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_protobuf_isDecode_CommentTagArray = _test_protobuf_isDecode(
  "CommentTagArray",
)<CommentTagArray>(CommentTagArray)({
  decode: (input) => typia.protobuf.isDecode<CommentTagArray>(input),
  encode: typia.protobuf.createEncode<CommentTagArray>(),
});
