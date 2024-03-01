import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_protobuf_isEncode_CommentTagFormat = _test_protobuf_isEncode(
  "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)({
  encode: (input) => typia.protobuf.isEncode<CommentTagFormat>(input),
  decode: typia.protobuf.createDecode<CommentTagFormat>(),
  message: typia.protobuf.message<CommentTagFormat>(),
});
