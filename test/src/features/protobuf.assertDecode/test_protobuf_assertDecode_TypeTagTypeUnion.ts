import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_protobuf_assertDecode_TypeTagTypeUnion = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)(
    "TypeTagTypeUnion",
  )<TypeTagTypeUnion>(TypeTagTypeUnion)({
    decode: (input) => typia.protobuf.assertDecode<TypeTagTypeUnion>(input),
    encode: typia.protobuf.createEncode<TypeTagTypeUnion>(),
  });
