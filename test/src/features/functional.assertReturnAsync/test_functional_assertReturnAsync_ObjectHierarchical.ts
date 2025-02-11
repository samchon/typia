import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_assertReturnAsync_ObjectHierarchical =
  _test_functional_assertReturnAsync(TypeGuardError)("ObjectHierarchical")(
    ObjectHierarchical,
  )((p: (input: ObjectHierarchical) => Promise<ObjectHierarchical>) =>
    typia.functional.assertReturn(p),
  );
