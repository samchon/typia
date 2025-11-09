import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_CommentTagAtomicUnion = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(CommentTagAtomicUnion)({
  decode: typia.protobuf.createAssertDecode<CommentTagAtomicUnion>((p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<CommentTagAtomicUnion>(),
});
