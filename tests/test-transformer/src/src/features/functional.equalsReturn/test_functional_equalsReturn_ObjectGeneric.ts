import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_equalsReturn_ObjectGeneric = (): void => _test_functional_equalsReturn(
  "ObjectGeneric"
)(ObjectGeneric)(
  (p: (input: ObjectGeneric) => ObjectGeneric) => typia.functional.equalsReturn(p),
)