import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_TypeTagCustom = (): void => _test_functional_assertReturn(CustomGuardError)(
  "TypeTagCustom"
)(TypeTagCustom)(
  (p: (input: TypeTagCustom) => TypeTagCustom) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)