import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagRange } from "../../structures/TypeTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_TypeTagRange = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "TypeTagRange",
)<TypeTagRange>(TypeTagRange)({
  encode: typia.protobuf.createAssertEncode<TypeTagRange>((p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<TypeTagRange>(),
  message: typia.protobuf.message<TypeTagRange>(),
});
