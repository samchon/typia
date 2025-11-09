import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_protobuf_encode_CommentTagLength = (): void => _test_protobuf_encode(
  "CommentTagLength",
)<CommentTagLength>(CommentTagLength)({
  encode: (input) => typia.protobuf.encode<CommentTagLength>(input),
  decode: typia.protobuf.createDecode<CommentTagLength>(),
  message: typia.protobuf.message<CommentTagLength>(),
});
