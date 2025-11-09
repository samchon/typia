import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_protobuf_createAssertEncode_TypeTagRange = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)("TypeTagRange")<TypeTagRange>(
    TypeTagRange,
  )({
    encode: typia.protobuf.createAssertEncode<TypeTagRange>(),
    decode: typia.protobuf.createDecode<TypeTagRange>(),
    message: typia.protobuf.message<TypeTagRange>(),
  });
