import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_CommentTagInfinite =
  _test_protobuf_assertEncode(CustomGuardError)(
    "CommentTagInfinite",
  )<CommentTagInfinite>(CommentTagInfinite)({
    encode: (input) =>
      typia.protobuf.assertEncode<CommentTagInfinite>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<CommentTagInfinite>(),
    message: typia.protobuf.message<CommentTagInfinite>(),
  });
