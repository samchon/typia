import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_functional_validateEqualsReturn_ObjectUnionExplicit = (): void => _test_functional_validateEqualsReturn(
  "ObjectUnionExplicit"
)(ObjectUnionExplicit)(
  (p: (input: ObjectUnionExplicit) => ObjectUnionExplicit) => typia.functional.validateEqualsReturn(p),
)