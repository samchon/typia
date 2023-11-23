import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_protobuf_createAssertDecode_CommentTagRange =
  _test_protobuf_assertDecode("CommentTagRange")<CommentTagRange>(
    CommentTagRange,
  )({
    decode: typia.protobuf.createAssertDecode<CommentTagRange>(),
    encode: typia.protobuf.createEncode<CommentTagRange>(),
  });
