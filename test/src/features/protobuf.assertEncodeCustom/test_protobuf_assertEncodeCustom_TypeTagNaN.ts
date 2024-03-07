import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_TypeTagNaN =
  _test_protobuf_assertEncode(CustomGuardError)("TypeTagNaN")<TypeTagNaN>(
    TypeTagNaN,
  )({
    encode: (input) =>
      typia.protobuf.assertEncode<TypeTagNaN>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<TypeTagNaN>(),
    message: typia.protobuf.message<TypeTagNaN>(),
  });
