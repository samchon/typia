import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_protobuf_assertEncode_TypeTagAtomicUnion =
  _test_protobuf_assertEncode(TypeGuardError)(
    "TypeTagAtomicUnion",
  )<TypeTagAtomicUnion>(TypeTagAtomicUnion)({
    encode: (input) => typia.protobuf.assertEncode<TypeTagAtomicUnion>(input),
    decode: typia.protobuf.createDecode<TypeTagAtomicUnion>(),
    message: typia.protobuf.message<TypeTagAtomicUnion>(),
  });
