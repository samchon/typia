import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_protobuf_createAssertDecode_CommentTagPattern =
  _test_protobuf_assertDecode(TypeGuardError)(
    "CommentTagPattern",
  )<CommentTagPattern>(CommentTagPattern)({
    decode: typia.protobuf.createAssertDecode<CommentTagPattern>(),
    encode: typia.protobuf.createEncode<CommentTagPattern>(),
  });
