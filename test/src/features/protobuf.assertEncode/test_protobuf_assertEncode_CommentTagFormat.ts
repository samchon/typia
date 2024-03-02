import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_protobuf_assertEncode_CommentTagFormat =
  _test_protobuf_assertEncode(TypeGuardError)(
    "CommentTagFormat",
  )<CommentTagFormat>(CommentTagFormat)({
    encode: (input) => typia.protobuf.assertEncode<CommentTagFormat>(input),
    decode: typia.protobuf.createDecode<CommentTagFormat>(),
    message: typia.protobuf.message<CommentTagFormat>(),
  });
