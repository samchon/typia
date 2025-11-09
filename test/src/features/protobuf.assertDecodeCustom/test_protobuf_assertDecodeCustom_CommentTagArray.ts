import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_CommentTagArray = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "CommentTagArray",
)<CommentTagArray>(CommentTagArray)({
  decode: (input) => typia.protobuf.assertDecode<CommentTagArray>(input, (p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<CommentTagArray>(),
});
