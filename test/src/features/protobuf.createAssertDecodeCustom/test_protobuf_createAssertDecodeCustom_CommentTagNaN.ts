import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_CommentTagNaN =
  _test_protobuf_assertDecode(CustomGuardError)("CommentTagNaN")<CommentTagNaN>(
    CommentTagNaN,
  )({
    decode: typia.protobuf.createAssertDecode<CommentTagNaN>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<CommentTagNaN>(),
  });
