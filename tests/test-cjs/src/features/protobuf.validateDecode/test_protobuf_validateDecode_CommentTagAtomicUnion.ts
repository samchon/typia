import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_protobuf_validateDecode_CommentTagAtomicUnion = (): void =>
  _test_protobuf_validateDecode("CommentTagAtomicUnion")<CommentTagAtomicUnion>(
    CommentTagAtomicUnion,
  )({
    decode: (input) =>
      typia.protobuf.validateDecode<CommentTagAtomicUnion>(input),
    encode: typia.protobuf.createEncode<CommentTagAtomicUnion>(),
  });
