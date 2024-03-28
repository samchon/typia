import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_misc_createAssertPruneCustom_ObjectUnionCompositePointer =
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
    typia.misc.createAssertPrune<ObjectUnionCompositePointer>(
      (p) => new CustomGuardError(p),
    ),
  );
