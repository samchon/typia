import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_FunctionalPropertyUnion = (): Promise<void> => _test_functional_assertEqualsReturnAsync(CustomGuardError)(
  "FunctionalPropertyUnion"
)(FunctionalPropertyUnion)(
  (p: (input: FunctionalPropertyUnion) => Promise<FunctionalPropertyUnion>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)