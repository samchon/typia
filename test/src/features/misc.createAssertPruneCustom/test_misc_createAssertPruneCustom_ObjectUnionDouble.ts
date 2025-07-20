import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_misc_createAssertPruneCustom_ObjectUnionDouble = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectUnionDouble",
  )<ObjectUnionDouble>(ObjectUnionDouble)(
    typia.misc.createAssertPrune<ObjectUnionDouble>(
      (p) => new CustomGuardError(p),
    ),
  );
