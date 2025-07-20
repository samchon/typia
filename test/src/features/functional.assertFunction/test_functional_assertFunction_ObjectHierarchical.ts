import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_assertFunction_ObjectHierarchical = (): void =>
  _test_functional_assertFunction(TypeGuardError)("ObjectHierarchical")(
    ObjectHierarchical,
  )((p: (input: ObjectHierarchical) => ObjectHierarchical) =>
    typia.functional.assertFunction(p),
  );
