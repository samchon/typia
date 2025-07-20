import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_createValidateEncode_CommentTagType = (): void =>
  _test_protobuf_validateEncode("CommentTagType")<CommentTagType>(
    CommentTagType,
  )({
    encode: typia.protobuf.createValidateEncode<CommentTagType>(),
    decode: typia.protobuf.createDecode<CommentTagType>(),
    message: typia.protobuf.message<CommentTagType>(),
  });
