import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_protobuf_assertEncodeCustom_DynamicTree =
  _test_protobuf_assertEncode(CustomGuardError)("DynamicTree")<DynamicTree>(
    DynamicTree,
  )({
    encode: (input) =>
      typia.protobuf.assertEncode<DynamicTree>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<DynamicTree>(),
    message: typia.protobuf.message<DynamicTree>(),
  });
