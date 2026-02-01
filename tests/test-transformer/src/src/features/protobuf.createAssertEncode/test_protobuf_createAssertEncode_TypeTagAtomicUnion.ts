import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_TypeTagAtomicUnion = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(TypeTagAtomicUnion)({
  encode: typia.protobuf.createAssertEncode<TypeTagAtomicUnion>(),
  decode: typia.protobuf.createDecode<TypeTagAtomicUnion>(),
  message: typia.protobuf.message<TypeTagAtomicUnion>(),
});
