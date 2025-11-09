import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_CommentTagBigInt = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "CommentTagBigInt",
)<CommentTagBigInt>(CommentTagBigInt)({
  decode: (input) => typia.protobuf.assertDecode<CommentTagBigInt>(input, (p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<CommentTagBigInt>(),
});
