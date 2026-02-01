import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_protobuf_isEncode_CommentTagPattern = (): void => _test_protobuf_isEncode(
  "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)({
  encode: (input) => typia.protobuf.isEncode<CommentTagPattern>(input),
  decode: typia.protobuf.createDecode<CommentTagPattern>(),
  message: typia.protobuf.message<CommentTagPattern>(),
});
