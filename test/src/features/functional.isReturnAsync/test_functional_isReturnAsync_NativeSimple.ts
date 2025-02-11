import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_functional_isReturnAsync_NativeSimple = _test_functional_isReturnAsync(
  "NativeSimple"
)(NativeSimple)(
  (p: (input: NativeSimple) => Promise<NativeSimple>) =>
    typia.functional.isReturn(p),
)