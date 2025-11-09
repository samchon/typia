import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_protobuf_encode_CommentTagInfinite = (): void => _test_protobuf_encode(
  "CommentTagInfinite",
)<CommentTagInfinite>(CommentTagInfinite)({
  encode: (input) => typia.protobuf.encode<CommentTagInfinite>(input),
  decode: typia.protobuf.createDecode<CommentTagInfinite>(),
  message: typia.protobuf.message<CommentTagInfinite>(),
});
