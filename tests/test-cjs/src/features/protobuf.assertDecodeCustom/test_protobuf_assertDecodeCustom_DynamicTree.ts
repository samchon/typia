import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_protobuf_assertDecodeCustom_DynamicTree = (): void =>
  _test_protobuf_assertDecode(CustomGuardError)("DynamicTree")<DynamicTree>(
    DynamicTree,
  )({
    decode: (input) =>
      typia.protobuf.assertDecode<DynamicTree>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<DynamicTree>(),
  });
