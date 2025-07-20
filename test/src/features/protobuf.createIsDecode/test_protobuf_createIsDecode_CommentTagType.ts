import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_createIsDecode_CommentTagType = (): void =>
  _test_protobuf_isDecode("CommentTagType")<CommentTagType>(CommentTagType)({
    decode: typia.protobuf.createIsDecode<CommentTagType>(),
    encode: typia.protobuf.createEncode<CommentTagType>(),
  });
