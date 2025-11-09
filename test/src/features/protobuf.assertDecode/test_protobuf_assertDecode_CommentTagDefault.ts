import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_CommentTagDefault = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)({
  decode: (input) => typia.protobuf.assertDecode<CommentTagDefault>(input),
  encode: typia.protobuf.createEncode<CommentTagDefault>(),
});
