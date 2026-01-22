import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_protobuf_createIsEncode_CommentTagArray = (): void =>
  _test_protobuf_isEncode("CommentTagArray")<CommentTagArray>(CommentTagArray)({
    encode: typia.protobuf.createIsEncode<CommentTagArray>(),
    decode: typia.protobuf.createDecode<CommentTagArray>(),
    message: typia.protobuf.message<CommentTagArray>(),
  });
