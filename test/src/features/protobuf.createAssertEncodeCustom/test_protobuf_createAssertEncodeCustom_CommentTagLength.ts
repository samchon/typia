import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_CommentTagLength = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "CommentTagLength",
)<CommentTagLength>(CommentTagLength)({
  encode: typia.protobuf.createAssertEncode<CommentTagLength>((p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<CommentTagLength>(),
  message: typia.protobuf.message<CommentTagLength>(),
});
