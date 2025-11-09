import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagRange } from "../../structures/TypeTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_TypeTagRange = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "TypeTagRange",
)<TypeTagRange>(TypeTagRange)({
  decode: (input) => typia.protobuf.assertDecode<TypeTagRange>(input, (p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<TypeTagRange>(),
});
