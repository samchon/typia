import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_functional_validateReturnAsync_FunctionalObjectUnion =
  _test_functional_validateReturnAsync("FunctionalObjectUnion")(
    FunctionalObjectUnion,
  )((p: (input: FunctionalObjectUnion) => Promise<FunctionalObjectUnion>) =>
    typia.functional.validateReturn(p),
  );
