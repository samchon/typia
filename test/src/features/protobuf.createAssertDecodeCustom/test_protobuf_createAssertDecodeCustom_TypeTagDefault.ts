import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_protobuf_createAssertDecodeCustom_TypeTagDefault = (): void =>
  _test_protobuf_assertDecode(CustomGuardError)(
    "TypeTagDefault",
  )<TypeTagDefault>(TypeTagDefault)({
    decode: typia.protobuf.createAssertDecode<TypeTagDefault>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<TypeTagDefault>(),
  });
