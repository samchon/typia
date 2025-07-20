import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_protobuf_createAssertEncodeCustom_TypeTagInfinite =
  (): void =>
    _test_protobuf_assertEncode(CustomGuardError)(
      "TypeTagInfinite",
    )<TypeTagInfinite>(TypeTagInfinite)({
      encode: typia.protobuf.createAssertEncode<TypeTagInfinite>(
        (p) => new CustomGuardError(p),
      ),
      decode: typia.protobuf.createDecode<TypeTagInfinite>(),
      message: typia.protobuf.message<TypeTagInfinite>(),
    });
