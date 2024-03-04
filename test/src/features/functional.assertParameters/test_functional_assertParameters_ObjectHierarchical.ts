import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_assertParameters_ObjectHierarchical =
  _test_functional_assertParameters(TypeGuardError)("ObjectHierarchical")(
    ObjectHierarchical,
  )((p: (input: ObjectHierarchical) => ObjectHierarchical) =>
    typia.functional.assertParameters(p),
  );
