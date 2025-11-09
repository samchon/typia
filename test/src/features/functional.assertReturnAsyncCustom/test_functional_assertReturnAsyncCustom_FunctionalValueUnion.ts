import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_FunctionalValueUnion = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "FunctionalValueUnion"
)(FunctionalValueUnion)(
  (p: (input: FunctionalValueUnion) => Promise<FunctionalValueUnion>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)