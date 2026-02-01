import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_TypeTagTypeUnion = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "TypeTagTypeUnion",
)<TypeTagTypeUnion>(TypeTagTypeUnion)({
  decode: (input) => typia.protobuf.assertDecode<TypeTagTypeUnion>(input),
  encode: typia.protobuf.createEncode<TypeTagTypeUnion>(),
});
