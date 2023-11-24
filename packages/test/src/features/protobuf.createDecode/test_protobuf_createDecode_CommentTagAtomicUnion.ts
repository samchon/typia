import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_protobuf_createDecode_CommentTagAtomicUnion =
  _test_protobuf_decode("CommentTagAtomicUnion")<CommentTagAtomicUnion>(
    CommentTagAtomicUnion,
  )({
    decode: typia.protobuf.createDecode<CommentTagAtomicUnion>(),
    encode: typia.protobuf.createEncode<CommentTagAtomicUnion>(),
  });
