import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_validateFunctionAsync_ObjectHierarchical =
  _test_functional_validateFunctionAsync("ObjectHierarchical")(
    ObjectHierarchical,
  )((p: (input: ObjectHierarchical) => Promise<ObjectHierarchical>) =>
    typia.functional.validateFunction(p),
  );
