import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_functional_isReturnAsync_UltimateUnion = (): Promise<void> => _test_functional_isReturnAsync(
  "UltimateUnion"
)(UltimateUnion)(
  (p: (input: UltimateUnion) => Promise<UltimateUnion>) =>
    typia.functional.isReturn(p),
)