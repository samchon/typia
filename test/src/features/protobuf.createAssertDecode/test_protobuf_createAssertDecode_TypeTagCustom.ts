import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_protobuf_createAssertDecode_TypeTagCustom = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)("TypeTagCustom")<TypeTagCustom>(
    TypeTagCustom,
  )({
    decode: typia.protobuf.createAssertDecode<TypeTagCustom>(),
    encode: typia.protobuf.createEncode<TypeTagCustom>(),
  });
