import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_equalsFunction_ObjectGenericAlias = (): void => _test_functional_equalsFunction(
  "ObjectGenericAlias"
)(ObjectGenericAlias)(
  (p: (input: ObjectGenericAlias) => ObjectGenericAlias) => typia.functional.equalsFunction(p),
)