import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_protobuf_createAssertEncodeCustom_DynamicTree = (): void =>
  _test_protobuf_assertEncode(CustomGuardError)("DynamicTree")<DynamicTree>(
    DynamicTree,
  )({
    encode: typia.protobuf.createAssertEncode<DynamicTree>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<DynamicTree>(),
    message: typia.protobuf.message<DynamicTree>(),
  });
