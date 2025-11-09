import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_ToJsonTuple = (): void => _test_functional_assertEqualsReturn(TypeGuardError)(
  "ToJsonTuple"
)(ToJsonTuple)(
  (p: (input: ToJsonTuple) => ToJsonTuple) => typia.functional.assertEqualsReturn(p),
)