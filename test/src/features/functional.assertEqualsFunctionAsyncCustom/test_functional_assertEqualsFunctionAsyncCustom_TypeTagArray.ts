import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_TypeTagArray = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
  "TypeTagArray"
)(TypeTagArray)(
  (p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)