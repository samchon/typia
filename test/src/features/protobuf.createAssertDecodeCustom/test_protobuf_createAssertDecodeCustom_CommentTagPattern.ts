import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_CommentTagPattern = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)({
  decode: typia.protobuf.createAssertDecode<CommentTagPattern>((p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<CommentTagPattern>(),
});
