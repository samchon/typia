import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_protobuf_assertDecodeCustom_TypeTagLength = (): void =>
  _test_protobuf_assertDecode(CustomGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )({
    decode: (input) =>
      typia.protobuf.assertDecode<TypeTagLength>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<TypeTagLength>(),
  });
