import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_validateEqualsFunctionAsync_ObjectHierarchical =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("ObjectHierarchical")(
      ObjectHierarchical,
    )((p: (input: ObjectHierarchical) => Promise<ObjectHierarchical>) =>
      typia.functional.validateEqualsFunction(p),
    );
