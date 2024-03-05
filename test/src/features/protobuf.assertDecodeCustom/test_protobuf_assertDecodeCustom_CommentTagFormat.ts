import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_protobuf_assertDecodeCustom_CommentTagFormat =
  _test_protobuf_assertDecode(CustomGuardError)(
    "CommentTagFormat",
  )<CommentTagFormat>(CommentTagFormat)({
    decode: (input) =>
      typia.protobuf.assertDecode<CommentTagFormat>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<CommentTagFormat>(),
  });
