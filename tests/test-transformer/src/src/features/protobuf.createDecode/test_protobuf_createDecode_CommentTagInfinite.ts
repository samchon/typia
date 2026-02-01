import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_protobuf_createDecode_CommentTagInfinite = (): void => _test_protobuf_decode(
  "CommentTagInfinite",
)<CommentTagInfinite>(CommentTagInfinite)({
  decode: typia.protobuf.createDecode<CommentTagInfinite>(),
  encode: typia.protobuf.createEncode<CommentTagInfinite>(),
});
