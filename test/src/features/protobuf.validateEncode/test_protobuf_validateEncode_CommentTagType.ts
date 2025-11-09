import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_validateEncode_CommentTagType = (): void => _test_protobuf_validateEncode(
  "CommentTagType",
)<CommentTagType>(CommentTagType)({
  encode: (input) => typia.protobuf.validateEncode<CommentTagType>(input),
  decode: typia.protobuf.createDecode<CommentTagType>(),
  message: typia.protobuf.message<CommentTagType>(),
});
