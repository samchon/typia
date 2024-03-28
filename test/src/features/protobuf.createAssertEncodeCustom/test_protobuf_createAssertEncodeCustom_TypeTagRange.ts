import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_protobuf_createAssertEncodeCustom_TypeTagRange =
  _test_protobuf_assertEncode(CustomGuardError)("TypeTagRange")<TypeTagRange>(
    TypeTagRange,
  )({
    encode: typia.protobuf.createAssertEncode<TypeTagRange>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<TypeTagRange>(),
    message: typia.protobuf.message<TypeTagRange>(),
  });
