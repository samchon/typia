import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_functional_isFunction_ObjectDynamic = _test_functional_isFunction(
  "ObjectDynamic"
)(ObjectDynamic)(
  (p: (input: ObjectDynamic) => ObjectDynamic) => typia.functional.isFunction(p),
)