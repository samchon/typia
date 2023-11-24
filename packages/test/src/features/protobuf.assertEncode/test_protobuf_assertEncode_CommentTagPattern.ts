import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_protobuf_createAssertEncode_CommentTagPattern =
  _test_protobuf_assertEncode("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )({
    encode: (input) => typia.protobuf.assertEncode<CommentTagPattern>(input),
    decode: typia.protobuf.createDecode<CommentTagPattern>(),
    message: typia.protobuf.message<CommentTagPattern>(),
  });
