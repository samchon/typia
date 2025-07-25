import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_protobuf_validateDecode_CommentTagBigInt = (): void =>
  _test_protobuf_validateDecode("CommentTagBigInt")<CommentTagBigInt>(
    CommentTagBigInt,
  )({
    decode: (input) => typia.protobuf.validateDecode<CommentTagBigInt>(input),
    encode: typia.protobuf.createEncode<CommentTagBigInt>(),
  });
