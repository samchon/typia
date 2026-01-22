import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_equalsReturn_ObjectHierarchical = (): void =>
  _test_functional_equalsReturn("ObjectHierarchical")(ObjectHierarchical)(
    (p: (input: ObjectHierarchical) => ObjectHierarchical) =>
      typia.functional.equalsReturn(p),
  );
