import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_functional_isParametersAsync_UltimateUnion = _test_functional_isParametersAsync(
  "UltimateUnion"
)(UltimateUnion)(
  (p: (input: UltimateUnion) => Promise<UltimateUnion>) =>
    typia.functional.isParameters(p),
)