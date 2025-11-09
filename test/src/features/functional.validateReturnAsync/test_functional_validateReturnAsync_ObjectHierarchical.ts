import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_validateReturnAsync_ObjectHierarchical = (): Promise<void> => _test_functional_validateReturnAsync(
  "ObjectHierarchical"
)(ObjectHierarchical)(
  (p: (input: ObjectHierarchical) => Promise<ObjectHierarchical>) =>
    typia.functional.validateReturn(p),
)