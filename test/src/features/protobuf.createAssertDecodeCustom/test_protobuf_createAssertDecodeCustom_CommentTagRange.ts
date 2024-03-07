import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagRange } from "../../structures/CommentTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_CommentTagRange =
  _test_protobuf_assertDecode(CustomGuardError)(
    "CommentTagRange",
  )<CommentTagRange>(CommentTagRange)({
    decode: typia.protobuf.createAssertDecode<CommentTagRange>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<CommentTagRange>(),
  });
