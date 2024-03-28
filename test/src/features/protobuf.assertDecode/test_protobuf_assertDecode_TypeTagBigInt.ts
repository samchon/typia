import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_protobuf_assertDecode_TypeTagBigInt =
  _test_protobuf_assertDecode(TypeGuardError)("TypeTagBigInt")<TypeTagBigInt>(
    TypeTagBigInt,
  )({
    decode: (input) => typia.protobuf.assertDecode<TypeTagBigInt>(input),
    encode: typia.protobuf.createEncode<TypeTagBigInt>(),
  });
