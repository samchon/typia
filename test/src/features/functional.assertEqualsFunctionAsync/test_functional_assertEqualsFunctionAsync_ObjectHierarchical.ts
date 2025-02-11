import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_assertEqualsFunctionAsync_ObjectHierarchical =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "ObjectHierarchical",
  )(ObjectHierarchical)(
    (p: (input: ObjectHierarchical) => Promise<ObjectHierarchical>) =>
      typia.functional.assertEqualsFunction(p),
  );
