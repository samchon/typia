import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_assertDecode_CommentTagNaN = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)("CommentTagNaN")<CommentTagNaN>(
    CommentTagNaN,
  )({
    decode: (input) => typia.protobuf.assertDecode<CommentTagNaN>(input),
    encode: typia.protobuf.createEncode<CommentTagNaN>(),
  });
