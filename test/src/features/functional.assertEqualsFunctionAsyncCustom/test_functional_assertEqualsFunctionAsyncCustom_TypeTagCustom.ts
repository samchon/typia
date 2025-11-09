import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_TypeTagCustom = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
  "TypeTagCustom"
)(TypeTagCustom)(
  (p: (input: TypeTagCustom) => Promise<TypeTagCustom>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)