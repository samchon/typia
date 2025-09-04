import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_isFunctionAsync_ObjectHierarchical =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("ObjectHierarchical")(ObjectHierarchical)(
      (p: (input: ObjectHierarchical) => Promise<ObjectHierarchical>) =>
        typia.functional.isFunction(p),
    );
