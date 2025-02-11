import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ObjectHierarchical = _test_functional_assertParameters(TypeGuardError)(
  "ObjectHierarchical"
)(ObjectHierarchical)(
  (p: (input: ObjectHierarchical) => ObjectHierarchical) => typia.functional.assertParameters(p),
)