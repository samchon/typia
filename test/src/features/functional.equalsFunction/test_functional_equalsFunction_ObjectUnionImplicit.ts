import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_equalsFunction_ObjectUnionImplicit = _test_functional_equalsFunction(
  "ObjectUnionImplicit"
)(ObjectUnionImplicit)(
  (p: (input: ObjectUnionImplicit) => ObjectUnionImplicit) => typia.functional.equalsFunction(p),
)