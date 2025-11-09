import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_isReturn_ObjectHierarchical = (): void =>
  _test_functional_isReturn("ObjectHierarchical")(ObjectHierarchical)(
    (p: (input: ObjectHierarchical) => ObjectHierarchical) =>
      typia.functional.isReturn(p),
  );
