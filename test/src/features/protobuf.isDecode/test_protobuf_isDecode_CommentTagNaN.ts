import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_isDecode_CommentTagNaN = (): void => _test_protobuf_isDecode(
  "CommentTagNaN",
)<CommentTagNaN>(CommentTagNaN)({
  decode: (input) => typia.protobuf.isDecode<CommentTagNaN>(input),
  encode: typia.protobuf.createEncode<CommentTagNaN>(),
});
