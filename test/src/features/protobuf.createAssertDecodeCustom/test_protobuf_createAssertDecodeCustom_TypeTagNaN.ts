import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_protobuf_createAssertDecodeCustom_TypeTagNaN =
  _test_protobuf_assertDecode(CustomGuardError)("TypeTagNaN")<TypeTagNaN>(
    TypeTagNaN,
  )({
    decode: typia.protobuf.createAssertDecode<TypeTagNaN>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<TypeTagNaN>(),
  });
