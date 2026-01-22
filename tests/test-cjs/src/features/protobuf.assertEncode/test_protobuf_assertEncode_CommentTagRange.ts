import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_protobuf_assertEncode_CommentTagRange = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)(
    "CommentTagRange",
  )<CommentTagRange>(CommentTagRange)({
    encode: (input) => typia.protobuf.assertEncode<CommentTagRange>(input),
    decode: typia.protobuf.createDecode<CommentTagRange>(),
    message: typia.protobuf.message<CommentTagRange>(),
  });
