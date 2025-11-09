import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { SetAlias } from "../../structures/SetAlias";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_SetAlias = (): void => _test_functional_assertReturn(TypeGuardError)(
  "SetAlias"
)(SetAlias)(
  (p: (input: SetAlias) => SetAlias) => typia.functional.assertReturn(p),
)