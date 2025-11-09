import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_misc_assertPruneCustom_ObjectRecursive = (): void =>
  _test_misc_assertPrune(CustomGuardError)("ObjectRecursive")<ObjectRecursive>(
    ObjectRecursive,
  )((input) =>
    typia.misc.assertPrune<ObjectRecursive>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
