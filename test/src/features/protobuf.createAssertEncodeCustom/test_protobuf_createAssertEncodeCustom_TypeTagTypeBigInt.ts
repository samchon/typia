import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_protobuf_createAssertEncodeCustom_TypeTagTypeBigInt =
  (): void =>
    _test_protobuf_assertEncode(CustomGuardError)(
      "TypeTagTypeBigInt",
    )<TypeTagTypeBigInt>(TypeTagTypeBigInt)({
      encode: typia.protobuf.createAssertEncode<TypeTagTypeBigInt>(
        (p) => new CustomGuardError(p),
      ),
      decode: typia.protobuf.createDecode<TypeTagTypeBigInt>(),
      message: typia.protobuf.message<TypeTagTypeBigInt>(),
    });
