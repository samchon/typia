import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_isFunction_ObjectUndefined = (): void => _test_functional_isFunction(
  "ObjectUndefined"
)(ObjectUndefined)(
  (p: (input: ObjectUndefined) => ObjectUndefined) => typia.functional.isFunction(p),
)