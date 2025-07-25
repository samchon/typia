import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_protobuf_createValidateEncode_CommentTagRangeBigInt =
  (): void =>
    _test_protobuf_validateEncode(
      "CommentTagRangeBigInt",
    )<CommentTagRangeBigInt>(CommentTagRangeBigInt)({
      encode: typia.protobuf.createValidateEncode<CommentTagRangeBigInt>(),
      decode: typia.protobuf.createDecode<CommentTagRangeBigInt>(),
      message: typia.protobuf.message<CommentTagRangeBigInt>(),
    });
