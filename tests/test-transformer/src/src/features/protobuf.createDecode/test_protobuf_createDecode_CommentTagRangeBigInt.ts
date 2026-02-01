import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_protobuf_createDecode_CommentTagRangeBigInt = (): void => _test_protobuf_decode(
  "CommentTagRangeBigInt",
)<CommentTagRangeBigInt>(CommentTagRangeBigInt)({
  decode: typia.protobuf.createDecode<CommentTagRangeBigInt>(),
  encode: typia.protobuf.createEncode<CommentTagRangeBigInt>(),
});
