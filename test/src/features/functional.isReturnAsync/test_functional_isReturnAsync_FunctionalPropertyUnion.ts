import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_isReturnAsync_FunctionalPropertyUnion =
  _test_functional_isReturnAsync("FunctionalPropertyUnion")(
    FunctionalPropertyUnion,
  )((p: (input: FunctionalPropertyUnion) => Promise<FunctionalPropertyUnion>) =>
    typia.functional.isReturn(p),
  );
