import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_createDecode_CommentTagNaN = (): void =>
  _test_protobuf_decode("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)({
    decode: typia.protobuf.createDecode<CommentTagNaN>(),
    encode: typia.protobuf.createEncode<CommentTagNaN>(),
  });
