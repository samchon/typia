import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_isParametersAsync_ObjectHierarchical =
  (): Promise<void> =>
    _test_functional_isParametersAsync("ObjectHierarchical")(
      ObjectHierarchical,
    )((p: (input: ObjectHierarchical) => Promise<ObjectHierarchical>) =>
      typia.functional.isParameters(p),
    );
