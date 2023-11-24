import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_protobuf_createAssertDecode_CommentTagDefault =
  _test_protobuf_assertDecode("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )({
    decode: (input) => typia.protobuf.assertDecode<CommentTagDefault>(input),
    encode: typia.protobuf.createEncode<CommentTagDefault>(),
  });
