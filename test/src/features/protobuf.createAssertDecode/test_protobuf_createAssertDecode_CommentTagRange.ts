import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_protobuf_createAssertDecode_CommentTagRange = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)(
    "CommentTagRange",
  )<CommentTagRange>(CommentTagRange)({
    decode: typia.protobuf.createAssertDecode<CommentTagRange>(),
    encode: typia.protobuf.createEncode<CommentTagRange>(),
  });
