import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_DynamicConstant =
  _test_protobuf_assertEncode(CustomGuardError)(
    "DynamicConstant",
  )<DynamicConstant>(DynamicConstant)({
    encode: typia.protobuf.createAssertEncode<DynamicConstant>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<DynamicConstant>(),
    message: typia.protobuf.message<DynamicConstant>(),
  });
