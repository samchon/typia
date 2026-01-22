import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_protobuf_assertEncodeCustom_TypeTagPattern = (): void =>
  _test_protobuf_assertEncode(CustomGuardError)(
    "TypeTagPattern",
  )<TypeTagPattern>(TypeTagPattern)({
    encode: (input) =>
      typia.protobuf.assertEncode<TypeTagPattern>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<TypeTagPattern>(),
    message: typia.protobuf.message<TypeTagPattern>(),
  });
