import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_TypeTagPattern = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)({
  decode: typia.protobuf.createAssertDecode<TypeTagPattern>((p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<TypeTagPattern>(),
});
