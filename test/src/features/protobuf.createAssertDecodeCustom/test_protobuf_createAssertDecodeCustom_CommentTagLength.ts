import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_CommentTagLength =
  _test_protobuf_assertDecode(CustomGuardError)(
    "CommentTagLength",
  )<CommentTagLength>(CommentTagLength)({
    decode: typia.protobuf.createAssertDecode<CommentTagLength>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<CommentTagLength>(),
  });
