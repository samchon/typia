import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_TypeTagNaN = (): Promise<void> => _test_functional_assertEqualsReturnAsync(CustomGuardError)(
  "TypeTagNaN"
)(TypeTagNaN)(
  (p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)