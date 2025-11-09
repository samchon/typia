import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_functional_equalsFunctionAsync_FunctionalTupleUnion =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("FunctionalTupleUnion")(
      FunctionalTupleUnion,
    )((p: (input: FunctionalTupleUnion) => Promise<FunctionalTupleUnion>) =>
      typia.functional.equalsFunction(p),
    );
