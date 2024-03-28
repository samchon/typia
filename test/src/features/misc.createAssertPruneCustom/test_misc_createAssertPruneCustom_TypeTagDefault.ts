import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_misc_createAssertPruneCustom_TypeTagDefault =
  _test_misc_assertPrune(CustomGuardError)("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )(
    typia.misc.createAssertPrune<TypeTagDefault>(
      (p) => new CustomGuardError(p),
    ),
  );
