import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_protobuf_assertEncodeCustom_TypeTagType =
  _test_protobuf_assertEncode(CustomGuardError)("TypeTagType")<TypeTagType>(
    TypeTagType,
  )({
    encode: (input) =>
      typia.protobuf.assertEncode<TypeTagType>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<TypeTagType>(),
    message: typia.protobuf.message<TypeTagType>(),
  });
