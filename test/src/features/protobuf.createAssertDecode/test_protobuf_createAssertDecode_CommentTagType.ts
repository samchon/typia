import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagType } from "../../structures/CommentTagType";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_CommentTagType =
  _test_protobuf_assertDecode(TypeGuardError)("CommentTagType")<CommentTagType>(
    CommentTagType,
  )({
    decode: typia.protobuf.createAssertDecode<CommentTagType>(),
    encode: typia.protobuf.createEncode<CommentTagType>(),
  });
