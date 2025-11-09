import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_ObjectHierarchical = (): Promise<void> => _test_functional_assertFunctionAsync(TypeGuardError)(
  "ObjectHierarchical"
)(ObjectHierarchical)(
  (p: (input: ObjectHierarchical) => Promise<ObjectHierarchical>) =>
    typia.functional.assertFunction(p),
)