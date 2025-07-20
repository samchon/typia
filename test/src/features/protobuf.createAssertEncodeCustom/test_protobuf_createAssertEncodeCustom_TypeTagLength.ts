import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_protobuf_createAssertEncodeCustom_TypeTagLength = (): void =>
  _test_protobuf_assertEncode(CustomGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )({
    encode: typia.protobuf.createAssertEncode<TypeTagLength>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<TypeTagLength>(),
    message: typia.protobuf.message<TypeTagLength>(),
  });
