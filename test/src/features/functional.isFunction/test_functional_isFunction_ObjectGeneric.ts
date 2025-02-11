import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_isFunction_ObjectGeneric = _test_functional_isFunction(
  "ObjectGeneric"
)(ObjectGeneric)(
  (p: (input: ObjectGeneric) => ObjectGeneric) => typia.functional.isFunction(p),
)