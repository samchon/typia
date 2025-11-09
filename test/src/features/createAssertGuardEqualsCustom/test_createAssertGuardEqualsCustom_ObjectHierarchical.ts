import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createAssertGuardEqualsCustom_ObjectHierarchical = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectHierarchical",
  )<ObjectHierarchical>(ObjectHierarchical)(
    typia.createAssertGuardEquals<ObjectHierarchical>(
      (p) => new CustomGuardError(p),
    ),
  );
