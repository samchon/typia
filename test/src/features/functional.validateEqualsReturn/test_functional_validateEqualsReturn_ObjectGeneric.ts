import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_validateEqualsReturn_ObjectGeneric = (): void => _test_functional_validateEqualsReturn(
  "ObjectGeneric"
)(ObjectGeneric)(
  (p: (input: ObjectGeneric) => ObjectGeneric) => typia.functional.validateEqualsReturn(p),
)