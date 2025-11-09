import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_protobuf_assertDecodeCustom_CommentTagRange = (): void =>
  _test_protobuf_assertDecode(CustomGuardError)(
    "CommentTagRange",
  )<CommentTagRange>(CommentTagRange)({
    decode: (input) =>
      typia.protobuf.assertDecode<CommentTagRange>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<CommentTagRange>(),
  });
