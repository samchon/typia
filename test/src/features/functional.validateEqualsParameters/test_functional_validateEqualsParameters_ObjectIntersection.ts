import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_validateEqualsParameters_ObjectIntersection = (): void => _test_functional_validateEqualsParameters(
  "ObjectIntersection"
)(ObjectIntersection)(
  (p: (input: ObjectIntersection) => ObjectIntersection) => typia.functional.validateEqualsParameters(p),
)