import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_isFunction_ObjectInternal = (): void => _test_functional_isFunction(
  "ObjectInternal"
)(ObjectInternal)(
  (p: (input: ObjectInternal) => ObjectInternal) => typia.functional.isFunction(p),
)