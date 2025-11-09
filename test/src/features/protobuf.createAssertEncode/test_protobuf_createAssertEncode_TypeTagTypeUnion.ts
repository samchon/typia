import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_protobuf_createAssertEncode_TypeTagTypeUnion = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)(
    "TypeTagTypeUnion",
  )<TypeTagTypeUnion>(TypeTagTypeUnion)({
    encode: typia.protobuf.createAssertEncode<TypeTagTypeUnion>(),
    decode: typia.protobuf.createDecode<TypeTagTypeUnion>(),
    message: typia.protobuf.message<TypeTagTypeUnion>(),
  });
