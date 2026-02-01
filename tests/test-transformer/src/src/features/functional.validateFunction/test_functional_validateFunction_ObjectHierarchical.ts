import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_validateFunction_ObjectHierarchical = (): void => _test_functional_validateFunction(
  "ObjectHierarchical"
)(ObjectHierarchical)(
  (p: (input: ObjectHierarchical) => ObjectHierarchical) => typia.functional.validateFunction(p),
)