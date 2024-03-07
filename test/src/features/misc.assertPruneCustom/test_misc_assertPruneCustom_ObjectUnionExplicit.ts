import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_ObjectUnionExplicit =
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectUnionExplicit",
  )<ObjectUnionExplicit>(ObjectUnionExplicit)((input) =>
    typia.misc.assertPrune<ObjectUnionExplicit>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
