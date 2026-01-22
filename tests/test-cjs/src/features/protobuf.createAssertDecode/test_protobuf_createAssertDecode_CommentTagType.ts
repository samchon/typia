import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_createAssertDecode_CommentTagType = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)("CommentTagType")<CommentTagType>(
    CommentTagType,
  )({
    decode: typia.protobuf.createAssertDecode<CommentTagType>(),
    encode: typia.protobuf.createEncode<CommentTagType>(),
  });
