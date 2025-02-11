import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_functional_equalsReturnAsync_FunctionalTupleUnion =
  _test_functional_equalsReturnAsync("FunctionalTupleUnion")(
    FunctionalTupleUnion,
  )((p: (input: FunctionalTupleUnion) => Promise<FunctionalTupleUnion>) =>
    typia.functional.equalsReturn(p),
  );
