import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_protobuf_assertEncode_CommentTagArray = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)(
    "CommentTagArray",
  )<CommentTagArray>(CommentTagArray)({
    encode: (input) => typia.protobuf.assertEncode<CommentTagArray>(input),
    decode: typia.protobuf.createDecode<CommentTagArray>(),
    message: typia.protobuf.message<CommentTagArray>(),
  });
