import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_assertDecodeCustom_CommentTagType = (): void =>
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
