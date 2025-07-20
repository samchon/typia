import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_protobuf_assertEncode_CommentTagRangeBigInt = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)(
    "CommentTagRangeBigInt",
  )<CommentTagRangeBigInt>(CommentTagRangeBigInt)({
    encode: (input) =>
      typia.protobuf.assertEncode<CommentTagRangeBigInt>(input),
    decode: typia.protobuf.createDecode<CommentTagRangeBigInt>(),
    message: typia.protobuf.message<CommentTagRangeBigInt>(),
  });
