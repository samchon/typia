import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_protobuf_createAssertDecode_TypeTagArray = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)("TypeTagArray")<TypeTagArray>(
    TypeTagArray,
  )({
    decode: typia.protobuf.createAssertDecode<TypeTagArray>(),
    encode: typia.protobuf.createEncode<TypeTagArray>(),
  });
