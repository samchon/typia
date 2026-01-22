import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_protobuf_createValidateDecode_CommentTagTypeBigInt =
  (): void =>
    _test_protobuf_validateDecode("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
      CommentTagTypeBigInt,
    )({
      decode: typia.protobuf.createValidateDecode<CommentTagTypeBigInt>(),
      encode: typia.protobuf.createEncode<CommentTagTypeBigInt>(),
    });
