import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_CommentTagLength = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "CommentTagLength",
)<CommentTagLength>(CommentTagLength)({
  encode: (input) => typia.protobuf.assertEncode<CommentTagLength>(input, (p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<CommentTagLength>(),
  message: typia.protobuf.message<CommentTagLength>(),
});
