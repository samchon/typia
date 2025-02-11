import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_isReturnAsync_ObjectHierarchical =
  _test_functional_isReturnAsync("ObjectHierarchical")(ObjectHierarchical)(
    (p: (input: ObjectHierarchical) => Promise<ObjectHierarchical>) =>
      typia.functional.isReturn(p),
  );
