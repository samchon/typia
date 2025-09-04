import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_protobuf_decode_CommentTagAtomicUnion = (): void =>
  _test_protobuf_decode("CommentTagAtomicUnion")<CommentTagAtomicUnion>(
    CommentTagAtomicUnion,
  )({
    decode: (input) => typia.protobuf.decode<CommentTagAtomicUnion>(input),
    encode: typia.protobuf.createEncode<CommentTagAtomicUnion>(),
  });
