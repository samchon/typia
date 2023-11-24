import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_protobuf_createAssertDecode_CommentTagPattern =
  _test_protobuf_assertDecode("CommentTagPattern")<CommentTagPattern>(
    CommentTagPattern,
  )({
    decode: (input) => typia.protobuf.assertDecode<CommentTagPattern>(input),
    encode: typia.protobuf.createEncode<CommentTagPattern>(),
  });
