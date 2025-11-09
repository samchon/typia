import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagRange } from "../../structures/CommentTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_CommentTagRange = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "CommentTagRange",
)<CommentTagRange>(CommentTagRange)({
  encode: typia.protobuf.createAssertEncode<CommentTagRange>((p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<CommentTagRange>(),
  message: typia.protobuf.message<CommentTagRange>(),
});
