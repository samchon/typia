import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_ObjectIntersection = (): void => _test_functional_assertEqualsParameters(TypeGuardError)(
  "ObjectIntersection"
)(ObjectIntersection)(
  (p: (input: ObjectIntersection) => ObjectIntersection) => typia.functional.assertEqualsParameters(p),
)