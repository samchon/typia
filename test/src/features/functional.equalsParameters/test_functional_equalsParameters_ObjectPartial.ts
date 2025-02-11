import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_equalsParameters_ObjectPartial = _test_functional_equalsParameters(
  "ObjectPartial"
)(ObjectPartial)(
  (p: (input: ObjectPartial) => ObjectPartial) => typia.functional.equalsParameters(p),
)