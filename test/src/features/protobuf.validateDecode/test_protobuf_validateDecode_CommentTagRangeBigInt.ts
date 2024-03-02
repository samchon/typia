import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_protobuf_validateDecode_CommentTagRangeBigInt =
  _test_protobuf_validateDecode("CommentTagRangeBigInt")<CommentTagRangeBigInt>(
    CommentTagRangeBigInt,
  )({
    decode: (input) =>
      typia.protobuf.validateDecode<CommentTagRangeBigInt>(input),
    encode: typia.protobuf.createEncode<CommentTagRangeBigInt>(),
  });
