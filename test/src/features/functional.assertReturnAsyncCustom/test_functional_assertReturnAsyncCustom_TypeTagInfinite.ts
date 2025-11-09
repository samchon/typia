import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_TypeTagInfinite = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "TypeTagInfinite"
)(TypeTagInfinite)(
  (p: (input: TypeTagInfinite) => Promise<TypeTagInfinite>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)