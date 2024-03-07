import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_TypeTagCustom =
  _test_protobuf_assertEncode(CustomGuardError)("TypeTagCustom")<TypeTagCustom>(
    TypeTagCustom,
  )({
    encode: (input) =>
      typia.protobuf.assertEncode<TypeTagCustom>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<TypeTagCustom>(),
    message: typia.protobuf.message<TypeTagCustom>(),
  });
