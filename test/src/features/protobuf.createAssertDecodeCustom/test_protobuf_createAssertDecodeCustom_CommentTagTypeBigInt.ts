import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_protobuf_createAssertDecodeCustom_CommentTagTypeBigInt =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "CommentTagTypeBigInt",
    )<CommentTagTypeBigInt>(CommentTagTypeBigInt)({
      decode: typia.protobuf.createAssertDecode<CommentTagTypeBigInt>(
        (p) => new CustomGuardError(p),
      ),
      encode: typia.protobuf.createEncode<CommentTagTypeBigInt>(),
    });
