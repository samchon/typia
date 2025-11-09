import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_protobuf_validateEncode_CommentTagFormat = (): void => _test_protobuf_validateEncode(
  "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)({
  encode: (input) => typia.protobuf.validateEncode<CommentTagFormat>(input),
  decode: typia.protobuf.createDecode<CommentTagFormat>(),
  message: typia.protobuf.message<CommentTagFormat>(),
});
