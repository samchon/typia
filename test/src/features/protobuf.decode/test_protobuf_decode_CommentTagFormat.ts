import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_protobuf_decode_CommentTagFormat = _test_protobuf_decode(
  "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)({
  decode: (input) => typia.protobuf.decode<CommentTagFormat>(input),
  encode: typia.protobuf.createEncode<CommentTagFormat>(),
});
