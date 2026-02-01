import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_validateEqualsReturn_ObjectAlias = (): void => _test_functional_validateEqualsReturn(
  "ObjectAlias"
)(ObjectAlias)(
  (p: (input: ObjectAlias) => ObjectAlias) => typia.functional.validateEqualsReturn(p),
)