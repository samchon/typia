import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_protobuf_createIsDecode_CommentTagFormat = (): void => _test_protobuf_isDecode(
  "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)({
  decode: typia.protobuf.createIsDecode<CommentTagFormat>(),
  encode: typia.protobuf.createEncode<CommentTagFormat>(),
});
