import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_protobuf_encode_CommentTagArray = (): void =>
  _test_protobuf_encode("CommentTagArray")<CommentTagArray>(CommentTagArray)({
    encode: (input) => typia.protobuf.encode<CommentTagArray>(input),
    decode: typia.protobuf.createDecode<CommentTagArray>(),
    message: typia.protobuf.message<CommentTagArray>(),
  });
