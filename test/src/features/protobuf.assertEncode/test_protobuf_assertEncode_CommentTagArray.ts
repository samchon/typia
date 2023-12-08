import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_protobuf_createAssertEncode_CommentTagArray =
  _test_protobuf_assertEncode("CommentTagArray")<CommentTagArray>(
    CommentTagArray,
  )({
    encode: (input) => typia.protobuf.assertEncode<CommentTagArray>(input),
    decode: typia.protobuf.createDecode<CommentTagArray>(),
    message: typia.protobuf.message<CommentTagArray>(),
  });
