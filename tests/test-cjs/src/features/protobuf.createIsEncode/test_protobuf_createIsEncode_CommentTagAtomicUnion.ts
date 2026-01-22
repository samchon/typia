import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_protobuf_createIsEncode_CommentTagAtomicUnion = (): void =>
  _test_protobuf_isEncode("CommentTagAtomicUnion")<CommentTagAtomicUnion>(
    CommentTagAtomicUnion,
  )({
    encode: typia.protobuf.createIsEncode<CommentTagAtomicUnion>(),
    decode: typia.protobuf.createDecode<CommentTagAtomicUnion>(),
    message: typia.protobuf.message<CommentTagAtomicUnion>(),
  });
