import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_equalsReturn_ObjectSimple = _test_functional_equalsReturn(
  "ObjectSimple"
)(ObjectSimple)(
  (p: (input: ObjectSimple) => ObjectSimple) => typia.functional.equalsReturn(p),
)