import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_misc_assertPruneCustom_ObjectPropertyNullable =
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)((input) =>
    typia.misc.assertPrune<ObjectPropertyNullable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
