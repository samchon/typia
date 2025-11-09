import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_CommentTagInfinite = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "CommentTagInfinite",
)<CommentTagInfinite>(CommentTagInfinite)({
  decode: (input) => typia.protobuf.assertDecode<CommentTagInfinite>(input, (p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<CommentTagInfinite>(),
});
