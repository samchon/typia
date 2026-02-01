import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_CommentTagInfinite = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "CommentTagInfinite",
)<CommentTagInfinite>(CommentTagInfinite)({
  decode: (input) => typia.protobuf.assertDecode<CommentTagInfinite>(input),
  encode: typia.protobuf.createEncode<CommentTagInfinite>(),
});
