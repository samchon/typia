import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_protobuf_assertEncodeCustom_TypeTagDefault = (): void =>
  _test_protobuf_assertEncode(CustomGuardError)(
    "TypeTagDefault",
  )<TypeTagDefault>(TypeTagDefault)({
    encode: (input) =>
      typia.protobuf.assertEncode<TypeTagDefault>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<TypeTagDefault>(),
    message: typia.protobuf.message<TypeTagDefault>(),
  });
