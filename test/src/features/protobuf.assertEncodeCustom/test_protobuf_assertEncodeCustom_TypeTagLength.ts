import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_TypeTagLength =
  _test_protobuf_assertEncode(CustomGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )({
    encode: (input) =>
      typia.protobuf.assertEncode<TypeTagLength>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<TypeTagLength>(),
    message: typia.protobuf.message<TypeTagLength>(),
  });
