import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_isEncode_CommentTagType = (): void => _test_protobuf_isEncode(
  "CommentTagType",
)<CommentTagType>(CommentTagType)({
  encode: (input) => typia.protobuf.isEncode<CommentTagType>(input),
  decode: typia.protobuf.createDecode<CommentTagType>(),
  message: typia.protobuf.message<CommentTagType>(),
});
