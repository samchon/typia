import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_CommentTagBigInt =
  _test_protobuf_assertDecode(TypeGuardError)(
    "CommentTagBigInt",
  )<CommentTagBigInt>(CommentTagBigInt)({
    decode: (input) => typia.protobuf.assertDecode<CommentTagBigInt>(input),
    encode: typia.protobuf.createEncode<CommentTagBigInt>(),
  });
