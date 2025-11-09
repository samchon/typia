import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_protobuf_encode_CommentTagRange = (): void => _test_protobuf_encode(
  "CommentTagRange",
)<CommentTagRange>(CommentTagRange)({
  encode: (input) => typia.protobuf.encode<CommentTagRange>(input),
  decode: typia.protobuf.createDecode<CommentTagRange>(),
  message: typia.protobuf.message<CommentTagRange>(),
});
