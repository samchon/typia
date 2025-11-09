import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_validateEqualsFunction_ObjectUnionImplicit = (): void => _test_functional_validateEqualsFunction(
  "ObjectUnionImplicit"
)(ObjectUnionImplicit)(
  (p: (input: ObjectUnionImplicit) => ObjectUnionImplicit) => typia.functional.validateEqualsFunction(p),
)