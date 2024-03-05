import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_misc_assertPruneCustom_ObjectHierarchical =
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectHierarchical",
  )<ObjectHierarchical>(ObjectHierarchical)((input) =>
    typia.misc.assertPrune<ObjectHierarchical>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
