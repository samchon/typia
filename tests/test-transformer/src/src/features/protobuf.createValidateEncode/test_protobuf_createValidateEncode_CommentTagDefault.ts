import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_protobuf_createValidateEncode_CommentTagDefault = (): void => _test_protobuf_validateEncode(
  "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)({
  encode: typia.protobuf.createValidateEncode<CommentTagDefault>(),
  decode: typia.protobuf.createDecode<CommentTagDefault>(),
  message: typia.protobuf.message<CommentTagDefault>(),
});
