import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_CommentTagAtomicUnion =
  _test_protobuf_assertDecode(TypeGuardError)(
    "CommentTagAtomicUnion",
  )<CommentTagAtomicUnion>(CommentTagAtomicUnion)({
    decode: (input) =>
      typia.protobuf.assertDecode<CommentTagAtomicUnion>(input),
    encode: typia.protobuf.createEncode<CommentTagAtomicUnion>(),
  });
