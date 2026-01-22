import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_misc_createAssertPruneCustom_ObjectPrimitive = (): void =>
  _test_misc_assertPrune(CustomGuardError)("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )(
    typia.misc.createAssertPrune<ObjectPrimitive>(
      (p) => new CustomGuardError(p),
    ),
  );
