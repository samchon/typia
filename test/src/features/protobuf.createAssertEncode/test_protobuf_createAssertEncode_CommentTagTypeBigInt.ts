import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_protobuf_createAssertEncode_CommentTagTypeBigInt = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)(
    "CommentTagTypeBigInt",
  )<CommentTagTypeBigInt>(CommentTagTypeBigInt)({
    encode: typia.protobuf.createAssertEncode<CommentTagTypeBigInt>(),
    decode: typia.protobuf.createDecode<CommentTagTypeBigInt>(),
    message: typia.protobuf.message<CommentTagTypeBigInt>(),
  });
