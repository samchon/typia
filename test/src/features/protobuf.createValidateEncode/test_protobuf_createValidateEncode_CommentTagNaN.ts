import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_createValidateEncode_CommentTagNaN = (): void =>
  _test_protobuf_validateEncode("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)({
    encode: typia.protobuf.createValidateEncode<CommentTagNaN>(),
    decode: typia.protobuf.createDecode<CommentTagNaN>(),
    message: typia.protobuf.message<CommentTagNaN>(),
  });
