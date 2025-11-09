import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_protobuf_validateDecode_CommentTagTypeBigInt = (): void => _test_protobuf_validateDecode(
  "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(CommentTagTypeBigInt)({
  decode: (input) => typia.protobuf.validateDecode<CommentTagTypeBigInt>(input),
  encode: typia.protobuf.createEncode<CommentTagTypeBigInt>(),
});
