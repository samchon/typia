import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_protobuf_createAssertDecode_CommentTagTypeBigInt =
  _test_protobuf_assertDecode(TypeGuardError)(
    "CommentTagTypeBigInt",
  )<CommentTagTypeBigInt>(CommentTagTypeBigInt)({
    decode: typia.protobuf.createAssertDecode<CommentTagTypeBigInt>(),
    encode: typia.protobuf.createEncode<CommentTagTypeBigInt>(),
  });
