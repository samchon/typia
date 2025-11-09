import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_protobuf_createAssertEncode_CommentTagPattern = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)(
    "CommentTagPattern",
  )<CommentTagPattern>(CommentTagPattern)({
    encode: typia.protobuf.createAssertEncode<CommentTagPattern>(),
    decode: typia.protobuf.createDecode<CommentTagPattern>(),
    message: typia.protobuf.message<CommentTagPattern>(),
  });
