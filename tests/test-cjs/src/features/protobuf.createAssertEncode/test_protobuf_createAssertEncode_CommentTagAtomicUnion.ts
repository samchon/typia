import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_protobuf_createAssertEncode_CommentTagAtomicUnion =
  (): void =>
    _test_protobuf_assertEncode(TypeGuardError)(
      "CommentTagAtomicUnion",
    )<CommentTagAtomicUnion>(CommentTagAtomicUnion)({
      encode: typia.protobuf.createAssertEncode<CommentTagAtomicUnion>(),
      decode: typia.protobuf.createDecode<CommentTagAtomicUnion>(),
      message: typia.protobuf.message<CommentTagAtomicUnion>(),
    });
