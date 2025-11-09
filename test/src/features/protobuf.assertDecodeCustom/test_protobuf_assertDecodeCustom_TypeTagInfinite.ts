import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_TypeTagInfinite = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "TypeTagInfinite",
)<TypeTagInfinite>(TypeTagInfinite)({
  decode: (input) => typia.protobuf.assertDecode<TypeTagInfinite>(input, (p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<TypeTagInfinite>(),
});
