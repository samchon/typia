import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_protobuf_decode_CommentTagPattern = (): void => _test_protobuf_decode(
  "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)({
  decode: (input) => typia.protobuf.decode<CommentTagPattern>(input),
  encode: typia.protobuf.createEncode<CommentTagPattern>(),
});
