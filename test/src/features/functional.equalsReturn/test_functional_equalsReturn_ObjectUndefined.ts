import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_equalsReturn_ObjectUndefined = (): void => _test_functional_equalsReturn(
  "ObjectUndefined"
)(ObjectUndefined)(
  (p: (input: ObjectUndefined) => ObjectUndefined) => typia.functional.equalsReturn(p),
)