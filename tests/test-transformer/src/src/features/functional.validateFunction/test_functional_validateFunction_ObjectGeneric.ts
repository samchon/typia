import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_validateFunction_ObjectGeneric = (): void => _test_functional_validateFunction(
  "ObjectGeneric"
)(ObjectGeneric)(
  (p: (input: ObjectGeneric) => ObjectGeneric) => typia.functional.validateFunction(p),
)