import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_functional_assertReturnCustom_ObjectHierarchical = (): void =>
  _test_functional_assertReturn(CustomGuardError)("ObjectHierarchical")(
    ObjectHierarchical,
  )((p: (input: ObjectHierarchical) => ObjectHierarchical) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
