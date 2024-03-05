import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_protobuf_createAssertEncode_TypeTagCustom =
  _test_protobuf_assertEncode(TypeGuardError)("TypeTagCustom")<TypeTagCustom>(
    TypeTagCustom,
  )({
    encode: typia.protobuf.createAssertEncode<TypeTagCustom>(),
    decode: typia.protobuf.createDecode<TypeTagCustom>(),
    message: typia.protobuf.message<TypeTagCustom>(),
  });
