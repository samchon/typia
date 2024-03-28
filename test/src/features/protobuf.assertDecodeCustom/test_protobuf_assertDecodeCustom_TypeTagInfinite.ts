import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_protobuf_assertDecodeCustom_TypeTagInfinite =
  _test_protobuf_assertDecode(CustomGuardError)(
    "TypeTagInfinite",
  )<TypeTagInfinite>(TypeTagInfinite)({
    decode: (input) =>
      typia.protobuf.assertDecode<TypeTagInfinite>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<TypeTagInfinite>(),
  });
