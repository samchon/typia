import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_protobuf_assertEncodeCustom_TypeTagFormat = (): void =>
  _test_protobuf_assertEncode(CustomGuardError)("TypeTagFormat")<TypeTagFormat>(
    TypeTagFormat,
  )({
    encode: (input) =>
      typia.protobuf.assertEncode<TypeTagFormat>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<TypeTagFormat>(),
    message: typia.protobuf.message<TypeTagFormat>(),
  });
