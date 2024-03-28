import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_protobuf_createAssertEncodeCustom_TypeTagArray =
  _test_protobuf_assertEncode(CustomGuardError)("TypeTagArray")<TypeTagArray>(
    TypeTagArray,
  )({
    encode: typia.protobuf.createAssertEncode<TypeTagArray>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<TypeTagArray>(),
    message: typia.protobuf.message<TypeTagArray>(),
  });
