import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagType } from "../../structures/TypeTagType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_TypeTagType =
  _test_protobuf_assertEncode(CustomGuardError)("TypeTagType")<TypeTagType>(
    TypeTagType,
  )({
    encode: typia.protobuf.createAssertEncode<TypeTagType>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<TypeTagType>(),
    message: typia.protobuf.message<TypeTagType>(),
  });
