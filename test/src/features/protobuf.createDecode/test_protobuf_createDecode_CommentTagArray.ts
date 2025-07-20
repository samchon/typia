import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_protobuf_createDecode_CommentTagArray = (): void =>
  _test_protobuf_decode("CommentTagArray")<CommentTagArray>(CommentTagArray)({
    decode: typia.protobuf.createDecode<CommentTagArray>(),
    encode: typia.protobuf.createEncode<CommentTagArray>(),
  });
