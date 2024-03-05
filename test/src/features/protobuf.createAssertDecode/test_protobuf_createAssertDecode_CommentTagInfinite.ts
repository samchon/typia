import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_protobuf_createAssertDecode_CommentTagInfinite =
  _test_protobuf_assertDecode(TypeGuardError)(
    "CommentTagInfinite",
  )<CommentTagInfinite>(CommentTagInfinite)({
    decode: typia.protobuf.createAssertDecode<CommentTagInfinite>(),
    encode: typia.protobuf.createEncode<CommentTagInfinite>(),
  });
