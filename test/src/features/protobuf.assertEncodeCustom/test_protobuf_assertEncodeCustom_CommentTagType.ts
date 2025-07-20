import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_assertEncodeCustom_CommentTagType = (): void =>
  _test_protobuf_assertEncode(CustomGuardError)(
    "CommentTagType",
  )<CommentTagType>(CommentTagType)({
    encode: (input) =>
      typia.protobuf.assertEncode<CommentTagType>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<CommentTagType>(),
    message: typia.protobuf.message<CommentTagType>(),
  });
