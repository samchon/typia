import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_TypeTagTypeUnion =
  _test_misc_assertPrune(CustomGuardError)(
    "TypeTagTypeUnion",
  )<TypeTagTypeUnion>(TypeTagTypeUnion)(
    typia.misc.createAssertPrune<TypeTagTypeUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
