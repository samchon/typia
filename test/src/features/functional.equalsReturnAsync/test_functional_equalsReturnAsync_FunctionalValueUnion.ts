import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_equalsReturnAsync_FunctionalValueUnion = _test_functional_equalsReturnAsync(
  "FunctionalValueUnion"
)(FunctionalValueUnion)(
  (p: (input: FunctionalValueUnion) => Promise<FunctionalValueUnion>) =>
    typia.functional.equalsReturn(p),
)