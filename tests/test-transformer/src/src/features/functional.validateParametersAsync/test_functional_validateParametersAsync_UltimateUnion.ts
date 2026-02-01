import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_functional_validateParametersAsync_UltimateUnion = (): Promise<void> => _test_functional_validateParametersAsync(
  "UltimateUnion"
)(UltimateUnion)(
  (p: (input: UltimateUnion) => Promise<UltimateUnion>) =>
    typia.functional.validateParameters(p),
)