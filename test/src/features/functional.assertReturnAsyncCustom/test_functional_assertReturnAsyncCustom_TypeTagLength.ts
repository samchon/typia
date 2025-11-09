import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_TypeTagLength = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "TypeTagLength"
)(TypeTagLength)(
  (p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)