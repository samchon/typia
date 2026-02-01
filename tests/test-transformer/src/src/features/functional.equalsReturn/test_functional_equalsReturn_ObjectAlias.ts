import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_equalsReturn_ObjectAlias = (): void => _test_functional_equalsReturn(
  "ObjectAlias"
)(ObjectAlias)(
  (p: (input: ObjectAlias) => ObjectAlias) => typia.functional.equalsReturn(p),
)