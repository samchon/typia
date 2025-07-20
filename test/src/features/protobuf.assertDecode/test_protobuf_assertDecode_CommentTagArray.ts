import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_protobuf_assertDecode_CommentTagArray = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)(
    "CommentTagArray",
  )<CommentTagArray>(CommentTagArray)({
    decode: (input) => typia.protobuf.assertDecode<CommentTagArray>(input),
    encode: typia.protobuf.createEncode<CommentTagArray>(),
  });
