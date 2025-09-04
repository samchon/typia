import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_protobuf_createValidateDecode_CommentTagAtomicUnion =
  (): void =>
    _test_protobuf_validateDecode(
      "CommentTagAtomicUnion",
    )<CommentTagAtomicUnion>(CommentTagAtomicUnion)({
      decode: typia.protobuf.createValidateDecode<CommentTagAtomicUnion>(),
      encode: typia.protobuf.createEncode<CommentTagAtomicUnion>(),
    });
