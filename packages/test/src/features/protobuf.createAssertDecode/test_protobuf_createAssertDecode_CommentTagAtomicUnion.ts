import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_protobuf_createAssertDecode_CommentTagAtomicUnion =
  _test_protobuf_assertDecode("CommentTagAtomicUnion")<CommentTagAtomicUnion>(
    CommentTagAtomicUnion,
  )({
    decode: typia.protobuf.createAssertDecode<CommentTagAtomicUnion>(),
    encode: typia.protobuf.createEncode<CommentTagAtomicUnion>(),
  });
