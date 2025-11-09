import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_TypeTagFormat = (): void => _test_functional_assertReturn(CustomGuardError)(
  "TypeTagFormat"
)(TypeTagFormat)(
  (p: (input: TypeTagFormat) => TypeTagFormat) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)