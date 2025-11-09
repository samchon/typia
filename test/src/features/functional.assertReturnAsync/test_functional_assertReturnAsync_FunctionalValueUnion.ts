import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_FunctionalValueUnion = (): Promise<void> => _test_functional_assertReturnAsync(TypeGuardError)(
  "FunctionalValueUnion"
)(FunctionalValueUnion)(
  (p: (input: FunctionalValueUnion) => Promise<FunctionalValueUnion>) =>
    typia.functional.assertReturn(p),
)