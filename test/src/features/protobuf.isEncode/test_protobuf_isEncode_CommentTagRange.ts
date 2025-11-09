import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_protobuf_isEncode_CommentTagRange = (): void => _test_protobuf_isEncode(
  "CommentTagRange",
)<CommentTagRange>(CommentTagRange)({
  encode: (input) => typia.protobuf.isEncode<CommentTagRange>(input),
  decode: typia.protobuf.createDecode<CommentTagRange>(),
  message: typia.protobuf.message<CommentTagRange>(),
});
