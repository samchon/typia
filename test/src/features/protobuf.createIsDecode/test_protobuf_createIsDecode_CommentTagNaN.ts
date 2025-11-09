import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_createIsDecode_CommentTagNaN = (): void => _test_protobuf_isDecode(
  "CommentTagNaN",
)<CommentTagNaN>(CommentTagNaN)({
  decode: typia.protobuf.createIsDecode<CommentTagNaN>(),
  encode: typia.protobuf.createEncode<CommentTagNaN>(),
});
