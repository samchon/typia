import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_isFunction_ObjectDescription = _test_functional_isFunction(
  "ObjectDescription"
)(ObjectDescription)(
  (p: (input: ObjectDescription) => ObjectDescription) => typia.functional.isFunction(p),
)