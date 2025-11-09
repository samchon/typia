import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_CommentTagPattern = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)({
  encode: (input) => typia.protobuf.assertEncode<CommentTagPattern>(input, (p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<CommentTagPattern>(),
  message: typia.protobuf.message<CommentTagPattern>(),
});
