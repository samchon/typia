import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_equalsParametersAsync_ToJsonUnion = (): Promise<void> => _test_functional_equalsParametersAsync(
  "ToJsonUnion"
)(ToJsonUnion)(
  (p: (input: ToJsonUnion) => Promise<ToJsonUnion>) =>
    typia.functional.equalsParameters(p),
)