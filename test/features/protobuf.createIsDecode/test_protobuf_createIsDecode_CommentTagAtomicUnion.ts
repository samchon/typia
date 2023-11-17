import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_protobuf_createIsDecode_CommentTagAtomicUnion =
  _test_protobuf_isDecode("CommentTagAtomicUnion")<CommentTagAtomicUnion>(
    CommentTagAtomicUnion,
  )({
    decode: typia.protobuf.createIsDecode<CommentTagAtomicUnion>(),
    encode: typia.protobuf.createEncode<CommentTagAtomicUnion>(),
  });
