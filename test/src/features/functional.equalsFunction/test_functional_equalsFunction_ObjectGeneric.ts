import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_equalsFunction_ObjectGeneric = (): void => _test_functional_equalsFunction(
  "ObjectGeneric"
)(ObjectGeneric)(
  (p: (input: ObjectGeneric) => ObjectGeneric) => typia.functional.equalsFunction(p),
)