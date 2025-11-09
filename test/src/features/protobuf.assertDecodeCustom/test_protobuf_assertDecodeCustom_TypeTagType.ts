import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_protobuf_assertDecodeCustom_TypeTagType = (): void =>
  _test_protobuf_assertDecode(CustomGuardError)("TypeTagType")<TypeTagType>(
    TypeTagType,
  )({
    decode: (input) =>
      typia.protobuf.assertDecode<TypeTagType>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<TypeTagType>(),
  });
