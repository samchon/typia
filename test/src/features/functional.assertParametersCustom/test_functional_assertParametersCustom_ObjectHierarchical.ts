import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_assertParametersCustom_ObjectHierarchical =
  _test_functional_assertParameters(CustomGuardError)("ObjectHierarchical")(
    ObjectHierarchical,
  )((p: (input: ObjectHierarchical) => ObjectHierarchical) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
