import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_validateParametersAsync_ObjectHierarchical =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("ObjectHierarchical")(
      ObjectHierarchical,
    )((p: (input: ObjectHierarchical) => Promise<ObjectHierarchical>) =>
      typia.functional.validateParameters(p),
    );
