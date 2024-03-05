import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_misc_createAssertPruneCustom_ObjectHierarchical =
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectHierarchical",
  )<ObjectHierarchical>(ObjectHierarchical)(
    typia.misc.createAssertPrune<ObjectHierarchical>(
      (p) => new CustomGuardError(p),
    ),
  );
