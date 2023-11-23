import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_protobuf_createValidateEncode_CommentTagArray =
  _test_protobuf_validateEncode("CommentTagArray")<CommentTagArray>(
    CommentTagArray,
  )({
    encode: typia.protobuf.createValidateEncode<CommentTagArray>(),
    decode: typia.protobuf.createDecode<CommentTagArray>(),
    message: typia.protobuf.message<CommentTagArray>(),
  });
