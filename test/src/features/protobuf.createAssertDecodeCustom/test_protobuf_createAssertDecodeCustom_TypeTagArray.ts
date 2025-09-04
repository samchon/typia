import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_protobuf_createAssertDecodeCustom_TypeTagArray = (): void =>
  _test_protobuf_assertDecode(CustomGuardError)("TypeTagArray")<TypeTagArray>(
    TypeTagArray,
  )({
    decode: typia.protobuf.createAssertDecode<TypeTagArray>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<TypeTagArray>(),
  });
