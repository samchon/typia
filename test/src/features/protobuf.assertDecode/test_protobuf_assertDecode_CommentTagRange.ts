import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagRange } from "../../structures/CommentTagRange";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_CommentTagRange =
  _test_protobuf_assertDecode(TypeGuardError)(
    "CommentTagRange",
  )<CommentTagRange>(CommentTagRange)({
    decode: (input) => typia.protobuf.assertDecode<CommentTagRange>(input),
    encode: typia.protobuf.createEncode<CommentTagRange>(),
  });
