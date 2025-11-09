import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_validateReturn_ObjectHierarchical = (): void =>
  _test_functional_validateReturn("ObjectHierarchical")(ObjectHierarchical)(
    (p: (input: ObjectHierarchical) => ObjectHierarchical) =>
      typia.functional.validateReturn(p),
  );
