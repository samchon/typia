import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_equalsFunctionAsync_ObjectHierarchical =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("ObjectHierarchical")(
      ObjectHierarchical,
    )((p: (input: ObjectHierarchical) => Promise<ObjectHierarchical>) =>
      typia.functional.equalsFunction(p),
    );
