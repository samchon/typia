import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_validateReturnAsync_FunctionalProperty =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("FunctionalProperty")(
      FunctionalProperty,
    )((p: (input: FunctionalProperty) => Promise<FunctionalProperty>) =>
      typia.functional.validateReturn(p),
    );
