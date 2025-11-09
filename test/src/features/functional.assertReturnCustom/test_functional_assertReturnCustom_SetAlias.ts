import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { SetAlias } from "../../structures/SetAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_SetAlias = (): void => _test_functional_assertReturn(CustomGuardError)(
  "SetAlias"
)(SetAlias)(
  (p: (input: SetAlias) => SetAlias) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)