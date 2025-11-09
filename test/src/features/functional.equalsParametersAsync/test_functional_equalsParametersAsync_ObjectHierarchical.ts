import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_equalsParametersAsync_ObjectHierarchical =
  (): Promise<void> =>
    _test_functional_equalsParametersAsync("ObjectHierarchical")(
      ObjectHierarchical,
    )((p: (input: ObjectHierarchical) => Promise<ObjectHierarchical>) =>
      typia.functional.equalsParameters(p),
    );
