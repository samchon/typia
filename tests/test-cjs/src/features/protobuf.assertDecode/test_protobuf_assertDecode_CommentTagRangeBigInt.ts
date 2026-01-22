import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_protobuf_assertDecode_CommentTagRangeBigInt = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)(
    "CommentTagRangeBigInt",
  )<CommentTagRangeBigInt>(CommentTagRangeBigInt)({
    decode: (input) =>
      typia.protobuf.assertDecode<CommentTagRangeBigInt>(input),
    encode: typia.protobuf.createEncode<CommentTagRangeBigInt>(),
  });
