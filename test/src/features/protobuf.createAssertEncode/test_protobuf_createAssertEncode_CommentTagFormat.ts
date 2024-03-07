import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_CommentTagFormat =
  _test_protobuf_assertEncode(TypeGuardError)(
    "CommentTagFormat",
  )<CommentTagFormat>(CommentTagFormat)({
    encode: typia.protobuf.createAssertEncode<CommentTagFormat>(),
    decode: typia.protobuf.createDecode<CommentTagFormat>(),
    message: typia.protobuf.message<CommentTagFormat>(),
  });
