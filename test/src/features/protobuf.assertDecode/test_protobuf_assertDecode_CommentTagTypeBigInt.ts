import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_CommentTagTypeBigInt =
  _test_protobuf_assertDecode(TypeGuardError)(
    "CommentTagTypeBigInt",
  )<CommentTagTypeBigInt>(CommentTagTypeBigInt)({
    decode: (input) => typia.protobuf.assertDecode<CommentTagTypeBigInt>(input),
    encode: typia.protobuf.createEncode<CommentTagTypeBigInt>(),
  });
