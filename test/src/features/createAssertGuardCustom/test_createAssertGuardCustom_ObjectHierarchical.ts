import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ObjectHierarchical =
  _test_assertGuard(CustomGuardError)("ObjectHierarchical")<ObjectHierarchical>(
    ObjectHierarchical,
  )(
    typia.createAssertGuard<ObjectHierarchical>((p) => new CustomGuardError(p)),
  );
