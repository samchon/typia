import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_assertFunctionCustom_ObjectHierarchical =
  (): void =>
    _test_functional_assertFunction(CustomGuardError)("ObjectHierarchical")(
      ObjectHierarchical,
    )((p: (input: ObjectHierarchical) => ObjectHierarchical) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
