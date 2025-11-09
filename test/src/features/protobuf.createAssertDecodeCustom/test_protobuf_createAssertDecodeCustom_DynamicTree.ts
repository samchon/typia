import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_protobuf_createAssertDecodeCustom_DynamicTree = (): void =>
  _test_protobuf_assertDecode(CustomGuardError)("DynamicTree")<DynamicTree>(
    DynamicTree,
  )({
    decode: typia.protobuf.createAssertDecode<DynamicTree>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<DynamicTree>(),
  });
