import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_validateEqualsReturnAsync_FunctionalProperty =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("FunctionalProperty")(
      FunctionalProperty,
    )((p: (input: FunctionalProperty) => Promise<FunctionalProperty>) =>
      typia.functional.validateEqualsReturn(p),
    );
