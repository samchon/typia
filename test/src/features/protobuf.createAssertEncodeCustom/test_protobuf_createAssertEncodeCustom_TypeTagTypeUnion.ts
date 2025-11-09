import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_TypeTagTypeUnion = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "TypeTagTypeUnion",
)<TypeTagTypeUnion>(TypeTagTypeUnion)({
  encode: typia.protobuf.createAssertEncode<TypeTagTypeUnion>((p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<TypeTagTypeUnion>(),
  message: typia.protobuf.message<TypeTagTypeUnion>(),
});
