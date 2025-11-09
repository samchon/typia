import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_isFunction_ObjectRequired = (): void => _test_functional_isFunction(
  "ObjectRequired"
)(ObjectRequired)(
  (p: (input: ObjectRequired) => ObjectRequired) => typia.functional.isFunction(p),
)