import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_equalsFunction_ObjectHierarchical = _test_functional_equalsFunction(
  "ObjectHierarchical"
)(ObjectHierarchical)(
  (p: (input: ObjectHierarchical) => ObjectHierarchical) => typia.functional.equalsFunction(p),
)