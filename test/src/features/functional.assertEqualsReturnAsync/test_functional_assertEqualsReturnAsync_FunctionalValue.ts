import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_FunctionalValue = (): Promise<void> => _test_functional_assertEqualsReturnAsync(TypeGuardError)(
  "FunctionalValue"
)(FunctionalValue)(
  (p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
    typia.functional.assertEqualsReturn(p),
)