import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_assertParametersAsync_ObjectHierarchical =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)(
      "ObjectHierarchical",
    )(ObjectHierarchical)(
      (p: (input: ObjectHierarchical) => Promise<ObjectHierarchical>) =>
        typia.functional.assertParameters(p),
    );
