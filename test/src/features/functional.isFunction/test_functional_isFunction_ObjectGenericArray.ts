import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_isFunction_ObjectGenericArray = _test_functional_isFunction(
  "ObjectGenericArray"
)(ObjectGenericArray)(
  (p: (input: ObjectGenericArray) => ObjectGenericArray) => typia.functional.isFunction(p),
)