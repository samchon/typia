import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_CommentTagBigInt =
  _test_protobuf_assertEncode(TypeGuardError)(
    "CommentTagBigInt",
  )<CommentTagBigInt>(CommentTagBigInt)({
    encode: typia.protobuf.createAssertEncode<CommentTagBigInt>(),
    decode: typia.protobuf.createDecode<CommentTagBigInt>(),
    message: typia.protobuf.message<CommentTagBigInt>(),
  });
