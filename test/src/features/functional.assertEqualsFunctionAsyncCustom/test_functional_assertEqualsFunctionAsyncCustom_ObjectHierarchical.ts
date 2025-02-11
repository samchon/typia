import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectHierarchical =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ObjectHierarchical",
  )(ObjectHierarchical)(
    (p: (input: ObjectHierarchical) => Promise<ObjectHierarchical>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
