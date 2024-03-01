import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_protobuf_isEncode_CommentTagLength = _test_protobuf_isEncode(
  "CommentTagLength",
)<CommentTagLength>(CommentTagLength)({
  encode: (input) => typia.protobuf.isEncode<CommentTagLength>(input),
  decode: typia.protobuf.createDecode<CommentTagLength>(),
  message: typia.protobuf.message<CommentTagLength>(),
});
