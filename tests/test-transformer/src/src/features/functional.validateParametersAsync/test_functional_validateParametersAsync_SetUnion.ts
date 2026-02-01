import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { SetUnion } from "../../structures/SetUnion";

export const test_functional_validateParametersAsync_SetUnion = (): Promise<void> => _test_functional_validateParametersAsync(
  "SetUnion"
)(SetUnion)(
  (p: (input: SetUnion) => Promise<SetUnion>) =>
    typia.functional.validateParameters(p),
)