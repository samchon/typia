import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_TypeTagTuple = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
  "TypeTagTuple"
)(TypeTagTuple)(
  (p: (input: TypeTagTuple) => Promise<TypeTagTuple>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)