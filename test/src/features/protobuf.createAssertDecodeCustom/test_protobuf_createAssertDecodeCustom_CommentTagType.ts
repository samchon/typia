import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_createAssertDecodeCustom_CommentTagType =
  _test_protobuf_assertDecode(CustomGuardError)(
    "CommentTagType",
  )<CommentTagType>(CommentTagType)({
    decode: typia.protobuf.createAssertDecode<CommentTagType>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<CommentTagType>(),
  });
