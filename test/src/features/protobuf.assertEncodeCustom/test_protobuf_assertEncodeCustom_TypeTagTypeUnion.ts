import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_protobuf_assertEncodeCustom_TypeTagTypeUnion = (): void =>
  _test_protobuf_assertEncode(CustomGuardError)(
    "TypeTagTypeUnion",
  )<TypeTagTypeUnion>(TypeTagTypeUnion)({
    encode: (input) =>
      typia.protobuf.assertEncode<TypeTagTypeUnion>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<TypeTagTypeUnion>(),
    message: typia.protobuf.message<TypeTagTypeUnion>(),
  });
