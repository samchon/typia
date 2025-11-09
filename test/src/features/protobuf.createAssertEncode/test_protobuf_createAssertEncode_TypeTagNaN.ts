import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_protobuf_createAssertEncode_TypeTagNaN = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)("TypeTagNaN")<TypeTagNaN>(
    TypeTagNaN,
  )({
    encode: typia.protobuf.createAssertEncode<TypeTagNaN>(),
    decode: typia.protobuf.createDecode<TypeTagNaN>(),
    message: typia.protobuf.message<TypeTagNaN>(),
  });
