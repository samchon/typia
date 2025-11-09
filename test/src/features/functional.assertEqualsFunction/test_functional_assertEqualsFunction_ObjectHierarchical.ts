import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_ObjectHierarchical = (): void => _test_functional_assertEqualsFunction(TypeGuardError)(
  "ObjectHierarchical"
)(ObjectHierarchical)(
  (p: (input: ObjectHierarchical) => ObjectHierarchical) => typia.functional.assertEqualsFunction(p),
)