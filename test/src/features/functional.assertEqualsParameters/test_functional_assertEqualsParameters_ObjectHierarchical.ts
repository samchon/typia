import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_assertEqualsParameters_ObjectHierarchical =
  _test_functional_assertEqualsParameters(TypeGuardError)("ObjectHierarchical")(
    ObjectHierarchical,
  )((p: (input: ObjectHierarchical) => ObjectHierarchical) =>
    typia.functional.assertEqualsParameters(p),
  );
