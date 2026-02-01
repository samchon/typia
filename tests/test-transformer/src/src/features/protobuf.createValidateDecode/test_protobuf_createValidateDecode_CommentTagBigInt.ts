import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_protobuf_createValidateDecode_CommentTagBigInt = (): void => _test_protobuf_validateDecode(
  "CommentTagBigInt",
)<CommentTagBigInt>(CommentTagBigInt)({
  decode: typia.protobuf.createValidateDecode<CommentTagBigInt>(),
  encode: typia.protobuf.createEncode<CommentTagBigInt>(),
});
