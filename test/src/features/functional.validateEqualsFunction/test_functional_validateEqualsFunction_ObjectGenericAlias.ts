import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_validateEqualsFunction_ObjectGenericAlias = _test_functional_validateEqualsFunction(
  "ObjectGenericAlias"
)(ObjectGenericAlias)(
  (p: (input: ObjectGenericAlias) => ObjectGenericAlias) => typia.functional.validateEqualsFunction(p),
)