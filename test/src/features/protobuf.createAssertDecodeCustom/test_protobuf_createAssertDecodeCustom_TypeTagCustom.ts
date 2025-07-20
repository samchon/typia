import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_protobuf_createAssertDecodeCustom_TypeTagCustom = (): void =>
  _test_protobuf_assertDecode(CustomGuardError)("TypeTagCustom")<TypeTagCustom>(
    TypeTagCustom,
  )({
    decode: typia.protobuf.createAssertDecode<TypeTagCustom>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<TypeTagCustom>(),
  });
