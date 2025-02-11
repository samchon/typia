import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_isFunction_ObjectHttpArray = _test_functional_isFunction(
  "ObjectHttpArray"
)(ObjectHttpArray)(
  (p: (input: ObjectHttpArray) => ObjectHttpArray) => typia.functional.isFunction(p),
)