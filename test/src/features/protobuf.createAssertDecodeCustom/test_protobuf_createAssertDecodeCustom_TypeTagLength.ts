import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_TypeTagLength = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)({
  decode: typia.protobuf.createAssertDecode<TypeTagLength>((p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<TypeTagLength>(),
});
