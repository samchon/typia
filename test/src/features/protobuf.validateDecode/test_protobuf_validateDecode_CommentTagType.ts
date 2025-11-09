import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_validateDecode_CommentTagType = (): void => _test_protobuf_validateDecode(
  "CommentTagType",
)<CommentTagType>(CommentTagType)({
  decode: (input) => typia.protobuf.validateDecode<CommentTagType>(input),
  encode: typia.protobuf.createEncode<CommentTagType>(),
});
