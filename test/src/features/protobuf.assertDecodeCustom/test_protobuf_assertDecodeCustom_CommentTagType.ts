import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagType } from "../../structures/CommentTagType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_CommentTagType =
  _test_protobuf_assertDecode(CustomGuardError)(
    "CommentTagType",
  )<CommentTagType>(CommentTagType)({
    decode: (input) =>
      typia.protobuf.assertDecode<CommentTagType>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<CommentTagType>(),
  });
