import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_protobuf_assertEncodeCustom_CommentTagBigInt = (): void =>
  _test_protobuf_assertEncode(CustomGuardError)(
    "CommentTagBigInt",
  )<CommentTagBigInt>(CommentTagBigInt)({
    encode: (input) =>
      typia.protobuf.assertEncode<CommentTagBigInt>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<CommentTagBigInt>(),
    message: typia.protobuf.message<CommentTagBigInt>(),
  });
