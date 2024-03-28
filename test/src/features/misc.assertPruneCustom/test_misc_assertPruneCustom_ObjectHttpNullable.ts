import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_misc_assertPruneCustom_ObjectHttpNullable =
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectHttpNullable",
  )<ObjectHttpNullable>(ObjectHttpNullable)((input) =>
    typia.misc.assertPrune<ObjectHttpNullable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
