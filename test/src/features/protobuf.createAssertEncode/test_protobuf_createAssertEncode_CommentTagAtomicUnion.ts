import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_CommentTagAtomicUnion =
  _test_protobuf_assertEncode(TypeGuardError)(
    "CommentTagAtomicUnion",
  )<CommentTagAtomicUnion>(CommentTagAtomicUnion)({
    encode: typia.protobuf.createAssertEncode<CommentTagAtomicUnion>(),
    decode: typia.protobuf.createDecode<CommentTagAtomicUnion>(),
    message: typia.protobuf.message<CommentTagAtomicUnion>(),
  });
