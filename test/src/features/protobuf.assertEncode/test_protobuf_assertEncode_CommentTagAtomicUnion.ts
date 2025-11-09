import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

import { TypeGuardError } from "typia";

export const test_protobuf_assertEncode_CommentTagAtomicUnion = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(CommentTagAtomicUnion)({
  encode: (input) => typia.protobuf.assertEncode<CommentTagAtomicUnion>(input),
  decode: typia.protobuf.createDecode<CommentTagAtomicUnion>(),
  message: typia.protobuf.message<CommentTagAtomicUnion>(),
});
