import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_functional_isReturnAsync_FunctionalObjectUnion =
  (): Promise<void> =>
    _test_functional_isReturnAsync("FunctionalObjectUnion")(
      FunctionalObjectUnion,
    )((p: (input: FunctionalObjectUnion) => Promise<FunctionalObjectUnion>) =>
      typia.functional.isReturn(p),
    );
