import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_assertReturnAsync_FunctionalProperty =
  _test_functional_assertReturnAsync(TypeGuardError)("FunctionalProperty")(
    FunctionalProperty,
  )((p: (input: FunctionalProperty) => Promise<FunctionalProperty>) =>
    typia.functional.assertReturn(p),
  );
