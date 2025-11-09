import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_equalsReturn_ObjectGenericAlias = (): void => _test_functional_equalsReturn(
  "ObjectGenericAlias"
)(ObjectGenericAlias)(
  (p: (input: ObjectGenericAlias) => ObjectGenericAlias) => typia.functional.equalsReturn(p),
)