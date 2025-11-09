import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_protobuf_isDecode_CommentTagBigInt = (): void => _test_protobuf_isDecode(
  "CommentTagBigInt",
)<CommentTagBigInt>(CommentTagBigInt)({
  decode: (input) => typia.protobuf.isDecode<CommentTagBigInt>(input),
  encode: typia.protobuf.createEncode<CommentTagBigInt>(),
});
