import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_protobuf_isDecode_CommentTagFormat = (): void =>
  _test_protobuf_isDecode("CommentTagFormat")<CommentTagFormat>(
    CommentTagFormat,
  )({
    decode: (input) => typia.protobuf.isDecode<CommentTagFormat>(input),
    encode: typia.protobuf.createEncode<CommentTagFormat>(),
  });
