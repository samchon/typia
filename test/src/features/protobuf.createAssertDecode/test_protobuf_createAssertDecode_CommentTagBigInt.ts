import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_CommentTagBigInt =
  _test_protobuf_assertDecode(TypeGuardError)(
    "CommentTagBigInt",
  )<CommentTagBigInt>(CommentTagBigInt)({
    decode: typia.protobuf.createAssertDecode<CommentTagBigInt>(),
    encode: typia.protobuf.createEncode<CommentTagBigInt>(),
  });
