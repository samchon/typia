import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_CommentTagInfinite =
  _test_protobuf_assertDecode(TypeGuardError)(
    "CommentTagInfinite",
  )<CommentTagInfinite>(CommentTagInfinite)({
    decode: typia.protobuf.createAssertDecode<CommentTagInfinite>(),
    encode: typia.protobuf.createEncode<CommentTagInfinite>(),
  });
