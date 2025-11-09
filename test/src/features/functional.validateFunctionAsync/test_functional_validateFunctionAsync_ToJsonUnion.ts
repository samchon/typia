import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_validateFunctionAsync_ToJsonUnion = (): Promise<void> => _test_functional_validateFunctionAsync(
  "ToJsonUnion"
)(ToJsonUnion)(
  (p: (input: ToJsonUnion) => Promise<ToJsonUnion>) =>
    typia.functional.validateFunction(p),
)