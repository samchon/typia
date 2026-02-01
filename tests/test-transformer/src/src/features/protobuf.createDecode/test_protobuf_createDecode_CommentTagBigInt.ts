import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_protobuf_createDecode_CommentTagBigInt = (): void => _test_protobuf_decode(
  "CommentTagBigInt",
)<CommentTagBigInt>(CommentTagBigInt)({
  decode: typia.protobuf.createDecode<CommentTagBigInt>(),
  encode: typia.protobuf.createEncode<CommentTagBigInt>(),
});
