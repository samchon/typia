import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_TypeTagCustom = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)({
  encode: typia.protobuf.createAssertEncode<TypeTagCustom>((p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<TypeTagCustom>(),
  message: typia.protobuf.message<TypeTagCustom>(),
});
