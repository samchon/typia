import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_CommentTagArray = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "CommentTagArray",
)<CommentTagArray>(CommentTagArray)({
  encode: typia.protobuf.createAssertEncode<CommentTagArray>(),
  decode: typia.protobuf.createDecode<CommentTagArray>(),
  message: typia.protobuf.message<CommentTagArray>(),
});
