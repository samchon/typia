import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_createAssertEncode_CommentTagType = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)("CommentTagType")<CommentTagType>(
    CommentTagType,
  )({
    encode: typia.protobuf.createAssertEncode<CommentTagType>(),
    decode: typia.protobuf.createDecode<CommentTagType>(),
    message: typia.protobuf.message<CommentTagType>(),
  });
