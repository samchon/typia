import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_TypeTagBigInt = (): Promise<void> => _test_functional_assertEqualsReturnAsync(CustomGuardError)(
  "TypeTagBigInt"
)(TypeTagBigInt)(
  (p: (input: TypeTagBigInt) => Promise<TypeTagBigInt>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)