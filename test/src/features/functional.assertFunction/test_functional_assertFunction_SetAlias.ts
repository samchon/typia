import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { SetAlias } from "../../structures/SetAlias";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_SetAlias = (): void => _test_functional_assertFunction(TypeGuardError)(
  "SetAlias"
)(SetAlias)(
  (p: (input: SetAlias) => SetAlias) => typia.functional.assertFunction(p),
)