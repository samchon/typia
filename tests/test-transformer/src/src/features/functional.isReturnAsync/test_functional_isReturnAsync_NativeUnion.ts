import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_functional_isReturnAsync_NativeUnion = (): Promise<void> => _test_functional_isReturnAsync(
  "NativeUnion"
)(NativeUnion)(
  (p: (input: NativeUnion) => Promise<NativeUnion>) =>
    typia.functional.isReturn(p),
)