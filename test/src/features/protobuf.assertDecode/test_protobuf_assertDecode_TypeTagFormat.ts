import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_TypeTagFormat = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)({
  decode: (input) => typia.protobuf.assertDecode<TypeTagFormat>(input),
  encode: typia.protobuf.createEncode<TypeTagFormat>(),
});
