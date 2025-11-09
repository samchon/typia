import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_FunctionalPropertyUnion = (): Promise<void> => _test_functional_assertEqualsReturnAsync(TypeGuardError)(
  "FunctionalPropertyUnion"
)(FunctionalPropertyUnion)(
  (p: (input: FunctionalPropertyUnion) => Promise<FunctionalPropertyUnion>) =>
    typia.functional.assertEqualsReturn(p),
)