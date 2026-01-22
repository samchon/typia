import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_protobuf_createAssertDecode_TypeTagAtomicUnion = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)(
    "TypeTagAtomicUnion",
  )<TypeTagAtomicUnion>(TypeTagAtomicUnion)({
    decode: typia.protobuf.createAssertDecode<TypeTagAtomicUnion>(),
    encode: typia.protobuf.createEncode<TypeTagAtomicUnion>(),
  });
