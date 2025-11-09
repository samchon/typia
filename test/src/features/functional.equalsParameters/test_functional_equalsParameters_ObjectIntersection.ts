import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_equalsParameters_ObjectIntersection = (): void => _test_functional_equalsParameters(
  "ObjectIntersection"
)(ObjectIntersection)(
  (p: (input: ObjectIntersection) => ObjectIntersection) => typia.functional.equalsParameters(p),
)