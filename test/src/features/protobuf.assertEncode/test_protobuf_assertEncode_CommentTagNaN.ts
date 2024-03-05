import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_assertEncode_CommentTagNaN =
  _test_protobuf_assertEncode(TypeGuardError)("CommentTagNaN")<CommentTagNaN>(
    CommentTagNaN,
  )({
    encode: (input) => typia.protobuf.assertEncode<CommentTagNaN>(input),
    decode: typia.protobuf.createDecode<CommentTagNaN>(),
    message: typia.protobuf.message<CommentTagNaN>(),
  });
