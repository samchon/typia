import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_assertEqualsParametersAsync_ObjectHierarchical =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ObjectHierarchical",
  )(ObjectHierarchical)(
    (p: (input: ObjectHierarchical) => Promise<ObjectHierarchical>) =>
      typia.functional.assertEqualsParameters(p),
  );
