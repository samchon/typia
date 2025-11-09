import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_functional_isFunctionAsync_NativeUnion = (): Promise<void> => _test_functional_isFunctionAsync(
  "NativeUnion"
)(NativeUnion)(
  (p: (input: NativeUnion) => Promise<NativeUnion>) =>
    typia.functional.isFunction(p),
)