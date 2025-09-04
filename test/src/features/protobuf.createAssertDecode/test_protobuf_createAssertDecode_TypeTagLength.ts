import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_protobuf_createAssertDecode_TypeTagLength = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )({
    decode: typia.protobuf.createAssertDecode<TypeTagLength>(),
    encode: typia.protobuf.createEncode<TypeTagLength>(),
  });
