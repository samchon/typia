import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_protobuf_createAssertDecode_TypeTagPattern =
  _test_protobuf_assertDecode(TypeGuardError)("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )({
    decode: typia.protobuf.createAssertDecode<TypeTagPattern>(),
    encode: typia.protobuf.createEncode<TypeTagPattern>(),
  });
