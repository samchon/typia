import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_ObjectUndefined = _test_functional_assertEqualsParameters(TypeGuardError)(
  "ObjectUndefined"
)(ObjectUndefined)(
  (p: (input: ObjectUndefined) => ObjectUndefined) => typia.functional.assertEqualsParameters(p),
)