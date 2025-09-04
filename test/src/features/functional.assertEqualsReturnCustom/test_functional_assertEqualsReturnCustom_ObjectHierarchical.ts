import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_assertEqualsReturnCustom_ObjectHierarchical =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("ObjectHierarchical")(
      ObjectHierarchical,
    )((p: (input: ObjectHierarchical) => ObjectHierarchical) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
