import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_functional_equalsReturnAsync_FunctionalObjectUnion =
  _test_functional_equalsReturnAsync("FunctionalObjectUnion")(
    FunctionalObjectUnion,
  )((p: (input: FunctionalObjectUnion) => Promise<FunctionalObjectUnion>) =>
    typia.functional.equalsReturn(p),
  );
