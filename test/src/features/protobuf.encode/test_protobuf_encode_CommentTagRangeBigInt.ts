import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_protobuf_encode_CommentTagRangeBigInt = (): void => _test_protobuf_encode(
  "CommentTagRangeBigInt",
)<CommentTagRangeBigInt>(CommentTagRangeBigInt)({
  encode: (input) => typia.protobuf.encode<CommentTagRangeBigInt>(input),
  decode: typia.protobuf.createDecode<CommentTagRangeBigInt>(),
  message: typia.protobuf.message<CommentTagRangeBigInt>(),
});
