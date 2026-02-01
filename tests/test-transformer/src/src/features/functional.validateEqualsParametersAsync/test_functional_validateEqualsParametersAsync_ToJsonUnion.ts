import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_validateEqualsParametersAsync_ToJsonUnion = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "ToJsonUnion"
)(ToJsonUnion)(
  (p: (input: ToJsonUnion) => Promise<ToJsonUnion>) =>
    typia.functional.validateEqualsParameters(p),
)