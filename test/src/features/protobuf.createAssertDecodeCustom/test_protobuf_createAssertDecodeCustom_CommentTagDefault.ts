import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_CommentTagDefault = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)({
  decode: typia.protobuf.createAssertDecode<CommentTagDefault>((p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<CommentTagDefault>(),
});
