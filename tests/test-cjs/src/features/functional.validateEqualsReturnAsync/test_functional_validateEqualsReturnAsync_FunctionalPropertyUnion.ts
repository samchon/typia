import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_validateEqualsReturnAsync_FunctionalPropertyUnion =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("FunctionalPropertyUnion")(
      FunctionalPropertyUnion,
    )(
      (
        p: (input: FunctionalPropertyUnion) => Promise<FunctionalPropertyUnion>,
      ) => typia.functional.validateEqualsReturn(p),
    );
