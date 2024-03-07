import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_TypeTagPattern =
  _test_protobuf_assertEncode(TypeGuardError)("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )({
    encode: typia.protobuf.createAssertEncode<TypeTagPattern>(),
    decode: typia.protobuf.createDecode<TypeTagPattern>(),
    message: typia.protobuf.message<TypeTagPattern>(),
  });
