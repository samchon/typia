import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_protobuf_createAssertDecode_CommentTagArray = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)(
    "CommentTagArray",
  )<CommentTagArray>(CommentTagArray)({
    decode: typia.protobuf.createAssertDecode<CommentTagArray>(),
    encode: typia.protobuf.createEncode<CommentTagArray>(),
  });
