import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_CommentTagRangeBigInt =
  _test_protobuf_assertDecode(CustomGuardError)(
    "CommentTagRangeBigInt",
  )<CommentTagRangeBigInt>(CommentTagRangeBigInt)({
    decode: typia.protobuf.createAssertDecode<CommentTagRangeBigInt>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<CommentTagRangeBigInt>(),
  });
