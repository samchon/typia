import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_createAssertDecode_CommentTagNaN =
  _test_protobuf_assertDecode("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)({
    decode: (input) => typia.protobuf.assertDecode<CommentTagNaN>(input),
    encode: typia.protobuf.createEncode<CommentTagNaN>(),
  });
