import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_protobuf_isDecode_CommentTagAtomicUnion = (): void =>
  _test_protobuf_isDecode("CommentTagAtomicUnion")<CommentTagAtomicUnion>(
    CommentTagAtomicUnion,
  )({
    decode: (input) => typia.protobuf.isDecode<CommentTagAtomicUnion>(input),
    encode: typia.protobuf.createEncode<CommentTagAtomicUnion>(),
  });
