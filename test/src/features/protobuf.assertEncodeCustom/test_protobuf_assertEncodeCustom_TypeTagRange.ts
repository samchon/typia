import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagRange } from "../../structures/TypeTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_TypeTagRange =
  _test_protobuf_assertEncode(CustomGuardError)("TypeTagRange")<TypeTagRange>(
    TypeTagRange,
  )({
    encode: (input) =>
      typia.protobuf.assertEncode<TypeTagRange>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<TypeTagRange>(),
    message: typia.protobuf.message<TypeTagRange>(),
  });
