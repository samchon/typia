import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_misc_assertPruneCustom_ObjectPrimitive = (): void =>
  _test_misc_assertPrune(CustomGuardError)("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )((input) =>
    typia.misc.assertPrune<ObjectPrimitive>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
