import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_functional_validateParametersAsync_InstanceUnion = (): Promise<void> => _test_functional_validateParametersAsync(
  "InstanceUnion"
)(InstanceUnion)(
  (p: (input: InstanceUnion) => Promise<InstanceUnion>) =>
    typia.functional.validateParameters(p),
)