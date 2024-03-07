import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_ObjectHierarchical =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)(
    "ObjectHierarchical",
  )(ObjectHierarchical)(
    (p: (input: ObjectHierarchical) => Promise<ObjectHierarchical>) =>
      typia.functional.assertEqualsReturn(p),
  );
