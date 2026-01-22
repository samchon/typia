import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_createDecode_CommentTagType = (): void =>
  _test_protobuf_decode("CommentTagType")<CommentTagType>(CommentTagType)({
    decode: typia.protobuf.createDecode<CommentTagType>(),
    encode: typia.protobuf.createEncode<CommentTagType>(),
  });
