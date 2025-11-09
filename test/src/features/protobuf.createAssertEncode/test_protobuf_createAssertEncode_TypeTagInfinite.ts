import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_protobuf_createAssertEncode_TypeTagInfinite = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)(
    "TypeTagInfinite",
  )<TypeTagInfinite>(TypeTagInfinite)({
    encode: typia.protobuf.createAssertEncode<TypeTagInfinite>(),
    decode: typia.protobuf.createDecode<TypeTagInfinite>(),
    message: typia.protobuf.message<TypeTagInfinite>(),
  });
