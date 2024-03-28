import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_misc_assertPruneCustom_ObjectUnionDouble =
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectUnionDouble",
  )<ObjectUnionDouble>(ObjectUnionDouble)((input) =>
    typia.misc.assertPrune<ObjectUnionDouble>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
