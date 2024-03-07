import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { DynamicTree } from "../../structures/DynamicTree";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_DynamicTree =
  _test_protobuf_assertDecode(CustomGuardError)("DynamicTree")<DynamicTree>(
    DynamicTree,
  )({
    decode: typia.protobuf.createAssertDecode<DynamicTree>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<DynamicTree>(),
  });
