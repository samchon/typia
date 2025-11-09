import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_validateEqualsFunction_ObjectHierarchical = (): void => _test_functional_validateEqualsFunction(
  "ObjectHierarchical"
)(ObjectHierarchical)(
  (p: (input: ObjectHierarchical) => ObjectHierarchical) => typia.functional.validateEqualsFunction(p),
)