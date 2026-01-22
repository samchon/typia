import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_protobuf_assertDecode_CommentTagLength = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)(
    "CommentTagLength",
  )<CommentTagLength>(CommentTagLength)({
    decode: (input) => typia.protobuf.assertDecode<CommentTagLength>(input),
    encode: typia.protobuf.createEncode<CommentTagLength>(),
  });
