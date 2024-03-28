import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_assertReturnAsyncCustom_ObjectHierarchical =
  _test_functional_assertReturnAsync(CustomGuardError)("ObjectHierarchical")(
    ObjectHierarchical,
  )((p: (input: ObjectHierarchical) => Promise<ObjectHierarchical>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
