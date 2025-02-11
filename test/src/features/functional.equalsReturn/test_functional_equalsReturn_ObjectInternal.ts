import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_equalsReturn_ObjectInternal = _test_functional_equalsReturn(
  "ObjectInternal"
)(ObjectInternal)(
  (p: (input: ObjectInternal) => ObjectInternal) => typia.functional.equalsReturn(p),
)