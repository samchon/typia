import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_misc_createAssertPruneCustom_ObjectPropertyNullable =
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)(
    typia.misc.createAssertPrune<ObjectPropertyNullable>(
      (p) => new CustomGuardError(p),
    ),
  );
