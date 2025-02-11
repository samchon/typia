import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_equalsParameters_ObjectSimple = _test_functional_equalsParameters(
  "ObjectSimple"
)(ObjectSimple)(
  (p: (input: ObjectSimple) => ObjectSimple) => typia.functional.equalsParameters(p),
)