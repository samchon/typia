import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_validateEqualsReturnAsync_ObjectHierarchical =
  _test_functional_validateEqualsReturnAsync("ObjectHierarchical")(
    ObjectHierarchical,
  )((p: (input: ObjectHierarchical) => Promise<ObjectHierarchical>) =>
    typia.functional.validateEqualsReturn(p),
  );
