import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_protobuf_assertDecodeCustom_CommentTagPattern = (): void =>
  _test_protobuf_assertDecode(CustomGuardError)(
    "CommentTagPattern",
  )<CommentTagPattern>(CommentTagPattern)({
    decode: (input) =>
      typia.protobuf.assertDecode<CommentTagPattern>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<CommentTagPattern>(),
  });
