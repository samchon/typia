import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_protobuf_createValidateDecode_CommentTagInfinite = (): void =>
  _test_protobuf_validateDecode("CommentTagInfinite")<CommentTagInfinite>(
    CommentTagInfinite,
  )({
    decode: typia.protobuf.createValidateDecode<CommentTagInfinite>(),
    encode: typia.protobuf.createEncode<CommentTagInfinite>(),
  });
