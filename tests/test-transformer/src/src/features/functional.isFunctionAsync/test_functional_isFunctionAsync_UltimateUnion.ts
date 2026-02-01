import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_functional_isFunctionAsync_UltimateUnion = (): Promise<void> => _test_functional_isFunctionAsync(
  "UltimateUnion"
)(UltimateUnion)(
  (p: (input: UltimateUnion) => Promise<UltimateUnion>) =>
    typia.functional.isFunction(p),
)