import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_assertEqualsReturnAsync_FunctionalProperty =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)(
      "FunctionalProperty",
    )(FunctionalProperty)(
      (p: (input: FunctionalProperty) => Promise<FunctionalProperty>) =>
        typia.functional.assertEqualsReturn(p),
    );
