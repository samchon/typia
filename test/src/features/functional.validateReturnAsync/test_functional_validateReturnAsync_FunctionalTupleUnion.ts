import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_functional_validateReturnAsync_FunctionalTupleUnion =
  _test_functional_validateReturnAsync("FunctionalTupleUnion")(
    FunctionalTupleUnion,
  )((p: (input: FunctionalTupleUnion) => Promise<FunctionalTupleUnion>) =>
    typia.functional.validateReturn(p),
  );
