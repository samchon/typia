import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_protobuf_createAssertDecodeCustom_TypeTagFormat =
  _test_protobuf_assertDecode(CustomGuardError)("TypeTagFormat")<TypeTagFormat>(
    TypeTagFormat,
  )({
    decode: typia.protobuf.createAssertDecode<TypeTagFormat>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<TypeTagFormat>(),
  });
