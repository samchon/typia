import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_CommentTagFormat = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)({
  decode: (input) => typia.protobuf.assertDecode<CommentTagFormat>(input),
  encode: typia.protobuf.createEncode<CommentTagFormat>(),
});
