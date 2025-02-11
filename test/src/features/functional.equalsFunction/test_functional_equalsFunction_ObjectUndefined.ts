import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_equalsFunction_ObjectUndefined = _test_functional_equalsFunction(
  "ObjectUndefined"
)(ObjectUndefined)(
  (p: (input: ObjectUndefined) => ObjectUndefined) => typia.functional.equalsFunction(p),
)