import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectTuple } from "../../structures/ObjectTuple";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_ObjectTuple = (): void => _test_functional_assertEqualsReturn(TypeGuardError)(
  "ObjectTuple"
)(ObjectTuple)(
  (p: (input: ObjectTuple) => ObjectTuple) => typia.functional.assertEqualsReturn(p),
)