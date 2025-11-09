import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagType } from "../../structures/CommentTagType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_CommentTagType = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "CommentTagType",
)<CommentTagType>(CommentTagType)({
  encode: typia.protobuf.createAssertEncode<CommentTagType>((p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<CommentTagType>(),
  message: typia.protobuf.message<CommentTagType>(),
});
