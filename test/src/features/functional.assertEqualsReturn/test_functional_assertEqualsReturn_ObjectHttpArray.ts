import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_ObjectHttpArray = (): void => _test_functional_assertEqualsReturn(TypeGuardError)(
  "ObjectHttpArray"
)(ObjectHttpArray)(
  (p: (input: ObjectHttpArray) => ObjectHttpArray) => typia.functional.assertEqualsReturn(p),
)