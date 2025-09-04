import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_protobuf_createAssertDecodeCustom_TypeTagRange = (): void =>
  _test_protobuf_assertDecode(CustomGuardError)("TypeTagRange")<TypeTagRange>(
    TypeTagRange,
  )({
    decode: typia.protobuf.createAssertDecode<TypeTagRange>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<TypeTagRange>(),
  });
