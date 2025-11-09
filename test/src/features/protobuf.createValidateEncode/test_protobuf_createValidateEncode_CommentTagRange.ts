import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_protobuf_createValidateEncode_CommentTagRange = (): void => _test_protobuf_validateEncode(
  "CommentTagRange",
)<CommentTagRange>(CommentTagRange)({
  encode: typia.protobuf.createValidateEncode<CommentTagRange>(),
  decode: typia.protobuf.createDecode<CommentTagRange>(),
  message: typia.protobuf.message<CommentTagRange>(),
});
