import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_protobuf_createAssertDecode_CommentTagTypeBigInt =
  _test_protobuf_assertDecode("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
    CommentTagTypeBigInt,
  )({
    decode: (input) => typia.protobuf.assertDecode<CommentTagTypeBigInt>(input),
    encode: typia.protobuf.createEncode<CommentTagTypeBigInt>(),
  });
