import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_protobuf_createAssertDecode_CommentTagDefault =
  _test_protobuf_assertDecode(TypeGuardError)(
    "CommentTagDefault",
  )<CommentTagDefault>(CommentTagDefault)({
    decode: typia.protobuf.createAssertDecode<CommentTagDefault>(),
    encode: typia.protobuf.createEncode<CommentTagDefault>(),
  });
