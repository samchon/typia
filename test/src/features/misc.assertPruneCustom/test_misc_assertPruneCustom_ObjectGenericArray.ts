import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_misc_assertPruneCustom_ObjectGenericArray =
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectGenericArray",
  )<ObjectGenericArray>(ObjectGenericArray)((input) =>
    typia.misc.assertPrune<ObjectGenericArray>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
