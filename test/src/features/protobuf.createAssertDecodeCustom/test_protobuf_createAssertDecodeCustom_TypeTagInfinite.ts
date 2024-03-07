import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_TypeTagInfinite =
  _test_protobuf_assertDecode(CustomGuardError)(
    "TypeTagInfinite",
  )<TypeTagInfinite>(TypeTagInfinite)({
    decode: typia.protobuf.createAssertDecode<TypeTagInfinite>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<TypeTagInfinite>(),
  });
