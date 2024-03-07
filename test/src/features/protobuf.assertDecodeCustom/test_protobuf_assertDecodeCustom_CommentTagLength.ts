import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_CommentTagLength =
  _test_protobuf_assertDecode(CustomGuardError)(
    "CommentTagLength",
  )<CommentTagLength>(CommentTagLength)({
    decode: (input) =>
      typia.protobuf.assertDecode<CommentTagLength>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<CommentTagLength>(),
  });
