import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectSimple } from "../../structures/ObjectSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_ObjectSimple = _test_functional_assertEqualsReturn(TypeGuardError)(
  "ObjectSimple"
)(ObjectSimple)(
  (p: (input: ObjectSimple) => ObjectSimple) => typia.functional.assertEqualsReturn(p),
)