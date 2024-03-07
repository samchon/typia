import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagRange } from "../../structures/CommentTagRange";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_CommentTagRange =
  _test_protobuf_assertEncode(TypeGuardError)(
    "CommentTagRange",
  )<CommentTagRange>(CommentTagRange)({
    encode: typia.protobuf.createAssertEncode<CommentTagRange>(),
    decode: typia.protobuf.createDecode<CommentTagRange>(),
    message: typia.protobuf.message<CommentTagRange>(),
  });
