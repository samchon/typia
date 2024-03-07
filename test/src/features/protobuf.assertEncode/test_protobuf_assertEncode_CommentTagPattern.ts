import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

import { TypeGuardError } from "typia";

export const test_protobuf_assertEncode_CommentTagPattern =
  _test_protobuf_assertEncode(TypeGuardError)(
    "CommentTagPattern",
  )<CommentTagPattern>(CommentTagPattern)({
    encode: (input) => typia.protobuf.assertEncode<CommentTagPattern>(input),
    decode: typia.protobuf.createDecode<CommentTagPattern>(),
    message: typia.protobuf.message<CommentTagPattern>(),
  });
