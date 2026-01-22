import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_protobuf_createIsEncode_CommentTagRange = (): void =>
  _test_protobuf_isEncode("CommentTagRange")<CommentTagRange>(CommentTagRange)({
    encode: typia.protobuf.createIsEncode<CommentTagRange>(),
    decode: typia.protobuf.createDecode<CommentTagRange>(),
    message: typia.protobuf.message<CommentTagRange>(),
  });
