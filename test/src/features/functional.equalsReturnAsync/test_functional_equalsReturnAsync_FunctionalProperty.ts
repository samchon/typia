import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_equalsReturnAsync_FunctionalProperty = _test_functional_equalsReturnAsync(
  "FunctionalProperty"
)(FunctionalProperty)(
  (p: (input: FunctionalProperty) => Promise<FunctionalProperty>) =>
    typia.functional.equalsReturn(p),
)