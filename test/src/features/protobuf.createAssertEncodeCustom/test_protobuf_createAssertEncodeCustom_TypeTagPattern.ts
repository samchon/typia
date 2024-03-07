import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_TypeTagPattern =
  _test_protobuf_assertEncode(CustomGuardError)(
    "TypeTagPattern",
  )<TypeTagPattern>(TypeTagPattern)({
    encode: typia.protobuf.createAssertEncode<TypeTagPattern>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<TypeTagPattern>(),
    message: typia.protobuf.message<TypeTagPattern>(),
  });
