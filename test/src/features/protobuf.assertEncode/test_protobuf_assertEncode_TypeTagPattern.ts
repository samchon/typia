import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_protobuf_assertEncode_TypeTagPattern = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )({
    encode: (input) => typia.protobuf.assertEncode<TypeTagPattern>(input),
    decode: typia.protobuf.createDecode<TypeTagPattern>(),
    message: typia.protobuf.message<TypeTagPattern>(),
  });
