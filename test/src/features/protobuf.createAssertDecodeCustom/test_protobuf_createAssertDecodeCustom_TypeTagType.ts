import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_protobuf_createAssertDecodeCustom_TypeTagType =
  _test_protobuf_assertDecode(CustomGuardError)("TypeTagType")<TypeTagType>(
    TypeTagType,
  )({
    decode: typia.protobuf.createAssertDecode<TypeTagType>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<TypeTagType>(),
  });
