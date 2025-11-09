import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_isFunction_ObjectHierarchical = (): void =>
  _test_functional_isFunction("ObjectHierarchical")(ObjectHierarchical)(
    (p: (input: ObjectHierarchical) => ObjectHierarchical) =>
      typia.functional.isFunction(p),
  );
