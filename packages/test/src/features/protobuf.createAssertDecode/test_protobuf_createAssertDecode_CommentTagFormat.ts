import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_protobuf_createAssertDecode_CommentTagFormat =
  _test_protobuf_assertDecode("CommentTagFormat")<CommentTagFormat>(
    CommentTagFormat,
  )({
    decode: typia.protobuf.createAssertDecode<CommentTagFormat>(),
    encode: typia.protobuf.createEncode<CommentTagFormat>(),
  });
