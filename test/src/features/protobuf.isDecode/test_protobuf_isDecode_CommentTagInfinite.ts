import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_protobuf_isDecode_CommentTagInfinite = (): void => _test_protobuf_isDecode(
  "CommentTagInfinite",
)<CommentTagInfinite>(CommentTagInfinite)({
  decode: (input) => typia.protobuf.isDecode<CommentTagInfinite>(input),
  encode: typia.protobuf.createEncode<CommentTagInfinite>(),
});
