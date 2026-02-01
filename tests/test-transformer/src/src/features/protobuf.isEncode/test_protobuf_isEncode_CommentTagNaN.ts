import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_isEncode_CommentTagNaN = (): void => _test_protobuf_isEncode(
  "CommentTagNaN",
)<CommentTagNaN>(CommentTagNaN)({
  encode: (input) => typia.protobuf.isEncode<CommentTagNaN>(input),
  decode: typia.protobuf.createDecode<CommentTagNaN>(),
  message: typia.protobuf.message<CommentTagNaN>(),
});
