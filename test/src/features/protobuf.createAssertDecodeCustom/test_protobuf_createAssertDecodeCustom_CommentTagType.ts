import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagType } from "../../structures/CommentTagType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_CommentTagType = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "CommentTagType",
)<CommentTagType>(CommentTagType)({
  decode: typia.protobuf.createAssertDecode<CommentTagType>((p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<CommentTagType>(),
});
