import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_protobuf_createAssertEncode_CommentTagDefault = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)(
    "CommentTagDefault",
  )<CommentTagDefault>(CommentTagDefault)({
    encode: typia.protobuf.createAssertEncode<CommentTagDefault>(),
    decode: typia.protobuf.createDecode<CommentTagDefault>(),
    message: typia.protobuf.message<CommentTagDefault>(),
  });
