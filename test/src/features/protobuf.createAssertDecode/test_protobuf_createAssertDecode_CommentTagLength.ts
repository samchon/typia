import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_protobuf_createAssertDecode_CommentTagLength = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)(
    "CommentTagLength",
  )<CommentTagLength>(CommentTagLength)({
    decode: typia.protobuf.createAssertDecode<CommentTagLength>(),
    encode: typia.protobuf.createEncode<CommentTagLength>(),
  });
