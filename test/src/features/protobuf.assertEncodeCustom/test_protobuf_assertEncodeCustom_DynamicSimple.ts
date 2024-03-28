import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_protobuf_assertEncodeCustom_DynamicSimple =
  _test_protobuf_assertEncode(CustomGuardError)("DynamicSimple")<DynamicSimple>(
    DynamicSimple,
  )({
    encode: (input) =>
      typia.protobuf.assertEncode<DynamicSimple>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<DynamicSimple>(),
    message: typia.protobuf.message<DynamicSimple>(),
  });
