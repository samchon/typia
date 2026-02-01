import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_TypeTagAtomicUnion = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(TypeTagAtomicUnion)({
  decode: (input) => typia.protobuf.assertDecode<TypeTagAtomicUnion>(input),
  encode: typia.protobuf.createEncode<TypeTagAtomicUnion>(),
});
