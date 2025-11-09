import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_TypeTagFormat = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "TypeTagFormat"
)(TypeTagFormat)(
  (p: (input: TypeTagFormat) => Promise<TypeTagFormat>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)