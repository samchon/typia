import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_protobuf_createAssertEncodeCustom_CommentTagRangeBigInt =
  (): void =>
    _test_protobuf_assertEncode(CustomGuardError)(
      "CommentTagRangeBigInt",
    )<CommentTagRangeBigInt>(CommentTagRangeBigInt)({
      encode: typia.protobuf.createAssertEncode<CommentTagRangeBigInt>(
        (p) => new CustomGuardError(p),
      ),
      decode: typia.protobuf.createDecode<CommentTagRangeBigInt>(),
      message: typia.protobuf.message<CommentTagRangeBigInt>(),
    });
