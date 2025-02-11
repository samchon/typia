import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_functional_isReturnAsync_FunctionalTupleUnion =
  _test_functional_isReturnAsync("FunctionalTupleUnion")(FunctionalTupleUnion)(
    (p: (input: FunctionalTupleUnion) => Promise<FunctionalTupleUnion>) =>
      typia.functional.isReturn(p),
  );
