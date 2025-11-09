import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_functional_validateReturnAsync_NativeSimple = (): Promise<void> => _test_functional_validateReturnAsync(
  "NativeSimple"
)(NativeSimple)(
  (p: (input: NativeSimple) => Promise<NativeSimple>) =>
    typia.functional.validateReturn(p),
)