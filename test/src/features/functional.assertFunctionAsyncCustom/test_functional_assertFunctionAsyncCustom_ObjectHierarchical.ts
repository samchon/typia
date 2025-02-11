import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_assertFunctionAsyncCustom_ObjectHierarchical =
  _test_functional_assertFunctionAsync(CustomGuardError)("ObjectHierarchical")(
    ObjectHierarchical,
  )((p: (input: ObjectHierarchical) => Promise<ObjectHierarchical>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
