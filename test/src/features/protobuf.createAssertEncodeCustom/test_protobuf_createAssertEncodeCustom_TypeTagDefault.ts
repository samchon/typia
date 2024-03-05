import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_protobuf_createAssertEncodeCustom_TypeTagDefault =
  _test_protobuf_assertEncode(CustomGuardError)(
    "TypeTagDefault",
  )<TypeTagDefault>(TypeTagDefault)({
    encode: typia.protobuf.createAssertEncode<TypeTagDefault>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<TypeTagDefault>(),
    message: typia.protobuf.message<TypeTagDefault>(),
  });
