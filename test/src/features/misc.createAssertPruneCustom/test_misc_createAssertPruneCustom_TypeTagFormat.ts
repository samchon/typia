import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_misc_createAssertPruneCustom_TypeTagFormat =
  _test_misc_assertPrune(CustomGuardError)("TypeTagFormat")<TypeTagFormat>(
    TypeTagFormat,
  )(
    typia.misc.createAssertPrune<TypeTagFormat>((p) => new CustomGuardError(p)),
  );
