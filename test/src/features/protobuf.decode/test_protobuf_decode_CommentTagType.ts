import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_createDecode_CommentTagType = _test_protobuf_decode(
  "CommentTagType",
)<CommentTagType>(CommentTagType)({
  decode: (input) => typia.protobuf.decode<CommentTagType>(input),
  encode: typia.protobuf.createEncode<CommentTagType>(),
});
