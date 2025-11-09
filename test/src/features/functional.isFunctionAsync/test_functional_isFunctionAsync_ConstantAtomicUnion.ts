import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_functional_isFunctionAsync_ConstantAtomicUnion = (): Promise<void> => _test_functional_isFunctionAsync(
  "ConstantAtomicUnion"
)(ConstantAtomicUnion)(
  (p: (input: ConstantAtomicUnion) => Promise<ConstantAtomicUnion>) =>
    typia.functional.isFunction(p),
)