import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_protobuf_createValidateEncode_CommentTagAtomicUnion =
  (): void =>
    _test_protobuf_validateEncode(
      "CommentTagAtomicUnion",
    )<CommentTagAtomicUnion>(CommentTagAtomicUnion)({
      encode: typia.protobuf.createValidateEncode<CommentTagAtomicUnion>(),
      decode: typia.protobuf.createDecode<CommentTagAtomicUnion>(),
      message: typia.protobuf.message<CommentTagAtomicUnion>(),
    });
