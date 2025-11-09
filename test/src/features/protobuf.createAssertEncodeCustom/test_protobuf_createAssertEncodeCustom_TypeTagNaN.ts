import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_TypeTagNaN = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "TypeTagNaN",
)<TypeTagNaN>(TypeTagNaN)({
  encode: typia.protobuf.createAssertEncode<TypeTagNaN>((p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<TypeTagNaN>(),
  message: typia.protobuf.message<TypeTagNaN>(),
});
