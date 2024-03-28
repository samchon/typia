import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_misc_assertPruneCustom_ObjectUnionImplicit =
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectUnionImplicit",
  )<ObjectUnionImplicit>(ObjectUnionImplicit)((input) =>
    typia.misc.assertPrune<ObjectUnionImplicit>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
