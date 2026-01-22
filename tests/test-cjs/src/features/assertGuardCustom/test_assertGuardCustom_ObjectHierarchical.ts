import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_assertGuardCustom_ObjectHierarchical = (): void =>
  _test_assertGuard(CustomGuardError)("ObjectHierarchical")<ObjectHierarchical>(
    ObjectHierarchical,
  )((input) =>
    typia.assertGuard<ObjectHierarchical>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
