import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_createAssertEncode_CommentTagNaN = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)("CommentTagNaN")<CommentTagNaN>(
    CommentTagNaN,
  )({
    encode: typia.protobuf.createAssertEncode<CommentTagNaN>(),
    decode: typia.protobuf.createDecode<CommentTagNaN>(),
    message: typia.protobuf.message<CommentTagNaN>(),
  });
