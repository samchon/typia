import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_assertEqualsFunctionCustom_ObjectHierarchical =
  _test_functional_assertEqualsFunction(CustomGuardError)("ObjectHierarchical")(
    ObjectHierarchical,
  )((p: (input: ObjectHierarchical) => ObjectHierarchical) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
