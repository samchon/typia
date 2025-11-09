import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_CommentTagRangeBigInt = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "CommentTagRangeBigInt",
)<CommentTagRangeBigInt>(CommentTagRangeBigInt)({
  encode: typia.protobuf.createAssertEncode<CommentTagRangeBigInt>(),
  decode: typia.protobuf.createDecode<CommentTagRangeBigInt>(),
  message: typia.protobuf.message<CommentTagRangeBigInt>(),
});
