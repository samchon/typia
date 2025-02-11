import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_isFunction_ObjectGenericAlias = _test_functional_isFunction(
  "ObjectGenericAlias"
)(ObjectGenericAlias)(
  (p: (input: ObjectGenericAlias) => ObjectGenericAlias) => typia.functional.isFunction(p),
)