import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_protobuf_assertEncodeCustom_CommentTagRange = (): void =>
  _test_protobuf_assertEncode(CustomGuardError)(
    "CommentTagRange",
  )<CommentTagRange>(CommentTagRange)({
    encode: (input) =>
      typia.protobuf.assertEncode<CommentTagRange>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<CommentTagRange>(),
    message: typia.protobuf.message<CommentTagRange>(),
  });
