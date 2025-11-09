import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_isFunction_ObjectAlias = (): void => _test_functional_isFunction(
  "ObjectAlias"
)(ObjectAlias)(
  (p: (input: ObjectAlias) => ObjectAlias) => typia.functional.isFunction(p),
)