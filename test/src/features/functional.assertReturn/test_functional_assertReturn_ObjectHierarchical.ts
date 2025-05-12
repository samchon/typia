import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_assertReturn_ObjectHierarchical =
  _test_functional_assertReturn(TypeGuardError)("ObjectHierarchical")(
    ObjectHierarchical,
  )((p: (input: ObjectHierarchical) => ObjectHierarchical) =>
    typia.functional.assertReturn(p),
  );
