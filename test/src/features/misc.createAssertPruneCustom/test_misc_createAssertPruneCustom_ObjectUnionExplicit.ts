import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_misc_createAssertPruneCustom_ObjectUnionExplicit = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectUnionExplicit",
  )<ObjectUnionExplicit>(ObjectUnionExplicit)(
    typia.misc.createAssertPrune<ObjectUnionExplicit>(
      (p) => new CustomGuardError(p),
    ),
  );
