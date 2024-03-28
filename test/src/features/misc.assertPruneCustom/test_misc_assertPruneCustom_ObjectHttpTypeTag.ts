import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_misc_assertPruneCustom_ObjectHttpTypeTag =
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectHttpTypeTag",
  )<ObjectHttpTypeTag>(ObjectHttpTypeTag)((input) =>
    typia.misc.assertPrune<ObjectHttpTypeTag>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
