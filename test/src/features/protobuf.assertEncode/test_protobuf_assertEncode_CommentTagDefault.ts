import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

import { TypeGuardError } from "typia";

export const test_protobuf_assertEncode_CommentTagDefault =
  _test_protobuf_assertEncode(TypeGuardError)(
    "CommentTagDefault",
  )<CommentTagDefault>(CommentTagDefault)({
    encode: (input) => typia.protobuf.assertEncode<CommentTagDefault>(input),
    decode: typia.protobuf.createDecode<CommentTagDefault>(),
    message: typia.protobuf.message<CommentTagDefault>(),
  });
