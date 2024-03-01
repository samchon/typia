import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_misc_createAssertCloneCustom_DynamicUnion =
  _test_misc_assertClone(CustomGuardError)("DynamicUnion")<DynamicUnion>(
    DynamicUnion,
  )(typia.misc.createAssertClone<DynamicUnion>((p) => new CustomGuardError(p)));
