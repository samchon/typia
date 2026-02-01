import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_protobuf_createValidateEncode_CommentTagTypeBigInt = (): void => _test_protobuf_validateEncode(
  "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(CommentTagTypeBigInt)({
  encode: typia.protobuf.createValidateEncode<CommentTagTypeBigInt>(),
  decode: typia.protobuf.createDecode<CommentTagTypeBigInt>(),
  message: typia.protobuf.message<CommentTagTypeBigInt>(),
});
