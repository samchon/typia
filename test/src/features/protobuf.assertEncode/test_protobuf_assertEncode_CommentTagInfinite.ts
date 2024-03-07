import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

import { TypeGuardError } from "typia";

export const test_protobuf_assertEncode_CommentTagInfinite =
  _test_protobuf_assertEncode(TypeGuardError)(
    "CommentTagInfinite",
  )<CommentTagInfinite>(CommentTagInfinite)({
    encode: (input) => typia.protobuf.assertEncode<CommentTagInfinite>(input),
    decode: typia.protobuf.createDecode<CommentTagInfinite>(),
    message: typia.protobuf.message<CommentTagInfinite>(),
  });
