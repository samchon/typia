import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_protobuf_assertDecode_TypeTagArray = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)("TypeTagArray")<TypeTagArray>(
    TypeTagArray,
  )({
    decode: (input) => typia.protobuf.assertDecode<TypeTagArray>(input),
    encode: typia.protobuf.createEncode<TypeTagArray>(),
  });
